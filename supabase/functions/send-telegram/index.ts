// Получаем TELEGRAM_BOT_TOKEN из переменных окружения
const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
if (!BOT_TOKEN) throw new Error("TELEGRAM_BOT_TOKEN не задан!");

// Жёстко фиксируем ID супергруппы
const TARGET_CHAT_ID = -1002916514018;

// CORS заголовки
const CORS_HEADERS = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

// Запуск HTTP сервера на порту 8000
const listener = Deno.listen({ port: 8000 });
console.log("Сервер запущен на http://localhost:8000");

for await (const conn of listener) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      try {
        const req = requestEvent.request;

        // Обработка OPTIONS для CORS
        if (req.method === "OPTIONS") {
          requestEvent.respondWith(new Response(null, { headers: CORS_HEADERS }));
          continue;
        }

        if (req.method !== "POST") {
          requestEvent.respondWith(
            new Response(JSON.stringify({ error: "Method not allowed" }), {
              status: 405,
              headers: { ...Object.fromEntries(CORS_HEADERS.entries()), "Content-Type": "application/json" },
            })
          );
          continue;
        }

        const body = await req.json();
        const { phone, date, name } = body;

        if (!phone || !date) {
          requestEvent.respondWith(
            new Response(JSON.stringify({ error: "Phone and date are required" }), {
              status: 400,
              headers: { ...Object.fromEntries(CORS_HEADERS.entries()), "Content-Type": "application/json" },
            })
          );
          continue;
        }

        const nameText = name ? `👤 Имя: ${name}\n` : '';
        const message = `🎉 Новая заявка на бронирование!\n\n${nameText}📞 Телефон: ${phone}\n📅 Дата мероприятия: ${date}\n\n⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}`;

        console.log("📤 Отправляем сообщение в группу Telegram:", { chatId: TARGET_CHAT_ID, phone, date });

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TARGET_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error("Telegram API error:", responseData);
          requestEvent.respondWith(
            new Response(JSON.stringify({ error: "Failed to send message to Telegram", details: responseData }), {
              status: 500,
              headers: { ...Object.fromEntries(CORS_HEADERS.entries()), "Content-Type": "application/json" },
            })
          );
          continue;
        }

        console.log("✅ Сообщение успешно отправлено в группу:", TARGET_CHAT_ID);

        requestEvent.respondWith(
          new Response(JSON.stringify({ success: true, data: responseData }), {
            status: 200,
            headers: { ...Object.fromEntries(CORS_HEADERS.entries()), "Content-Type": "application/json" },
          })
        );
      } catch (error) {
        console.error("Ошибка функции send-telegram:", error);
        requestEvent.respondWith(
          new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...Object.fromEntries(CORS_HEADERS.entries()), "Content-Type": "application/json" },
          })
        );
      }
    }
  })();
}
