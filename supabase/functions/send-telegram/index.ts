import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Заголовки CORS для браузера
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ЖЕСТКО прописанный chat_id супергруппы - не меняется!
const TARGET_CHAT_ID = -1002916514018;

interface TelegramRequest {
  phone: string;
  date: string;
  name?: string;
  guests?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Диагностика при каждом запросе
  console.log("=== ДИАГНОСТИКА ===");
  console.log("TARGET_CHAT_ID:", TARGET_CHAT_ID);
  console.log("Тип TARGET_CHAT_ID:", typeof TARGET_CHAT_ID);
  console.log("Ожидаем супергруппу с ID:", -1002916514018);
  console.log("===================");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { phone, date, name, guests }: TelegramRequest = await req.json();

    if (!phone || !date) {
      return new Response(JSON.stringify({ error: "Phone and date are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!botToken) {
      return new Response(JSON.stringify({ error: "Bot token not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Формируем сообщение
    const nameText = name ? `👤 Имя: ${name}\n` : "";
    const guestsText = guests ? `👥 Количество гостей: ${guests}\n` : "";
    const message = `🎉 Новая заявка на бронирование!\n\n${nameText}📞 Телефон: ${phone}\n${guestsText}📅 Дата мероприятия: ${date}\n\n⏰ Время заявки: ${new Date().toLocaleString("ru-RU")}`;

    console.log("📤 Отправляем сообщение в Telegram:", { 
      targetChatId: TARGET_CHAT_ID,
      phone, 
      date, 
      name, 
      guests 
    });

    // ЖЕСТКО прописываем chat_id в теле запроса
    const telegramRequestBody = {
      chat_id: -1002916514018, // Прямо здесь прописываем нужный ID
      text: message,
      parse_mode: "HTML",
    };

    console.log("📨 Тело запроса к Telegram:", JSON.stringify(telegramRequestBody));

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(telegramRequestBody),
    });

    const responseData = await response.json();

    console.log("📩 Ответ от Telegram API:", JSON.stringify(responseData, null, 2));

    if (!response.ok || !responseData.ok) {
      console.error("❌ Ошибка Telegram API:", responseData);
      return new Response(
        JSON.stringify({ error: "Failed to send message to Telegram", details: responseData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Проверяем, куда фактически ушло сообщение
    if (responseData.result.chat.id !== -1002916514018) {
      console.warn("⚠️ ВНИМАНИЕ: Сообщение ушло не в ту группу!");
      console.warn("Ожидался chat_id: -1002916514018");
      console.warn("Фактический chat_id:", responseData.result.chat.id);
    }

    console.log("✅ Сообщение успешно отправлено");

    return new Response(JSON.stringify({ success: true, data: responseData }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("❌ Ошибка функции send-telegram:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

// Логи при запуске сервера
console.log("🚀 Сервер запущен");
console.log("🎯 Целевой chat_id супергруппы:", TARGET_CHAT_ID);
console.log("✅ Ожидаем сообщения в группе: -1002916514018");

serve(handler);