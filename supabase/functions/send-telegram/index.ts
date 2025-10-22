import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ID супергруппы (используйте числовой формат для супергрупп)
const SUPERGROUP_CHAT_ID = -1002916514018;

interface TelegramRequest {
  phone: string;
  date: string;
  name?: string;
  guests?: string;
  type?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Обработка CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }), 
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Получаем токен бота
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!botToken) {
      console.error("❌ TELEGRAM_BOT_TOKEN не настроен");
      return new Response(
        JSON.stringify({ error: "Bot token not configured" }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Парсим данные из запроса
    const body: TelegramRequest = await req.json();
    const { phone, date, name, guests, type } = body;

    if (!phone || !date) {
      console.error("❌ Отсутствуют обязательные поля: phone или date");
      return new Response(
        JSON.stringify({ error: "Phone and date are required" }), 
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("📥 Получены данные заявки:", { phone, date, name, guests, type });

    // Определяем тип заявки
    let formType = "📋 Общая заявка";
    if (type === "callback") {
      formType = "📞 Обратный звонок";
    } else if (type === "price") {
      formType = "💰 Запрос стоимости";
    } else if (type === "booking") {
      formType = "🎉 Бронирование";
    } else if (type === "contact") {
      formType = "✉️ Контактная форма";
    }

    // Формируем текст сообщения
    const nameText = name ? `👤 Имя: ${name}\n` : "";
    const guestsText = guests ? `👥 Количество гостей: ${guests}\n` : "";
    const currentTime = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
    
    const message = `${formType}

${nameText}📞 Телефон: ${phone}
${guestsText}📅 Дата мероприятия: ${date}

⏰ Время заявки: ${currentTime}`;

    console.log("📝 Сформировано сообщение для отправки");
    console.log("🎯 Целевой chat_id супергруппы:", SUPERGROUP_CHAT_ID);
    console.log("🔑 Тип chat_id:", typeof SUPERGROUP_CHAT_ID);

    // Подготавливаем тело запроса
    const telegramPayload = {
      chat_id: SUPERGROUP_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    };
    
    console.log("📤 Отправляемый payload:", JSON.stringify(telegramPayload));

    // Отправляем сообщение в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(telegramPayload),
    });

    const responseData = await telegramResponse.json();

    if (!telegramResponse.ok || !responseData.ok) {
      console.error("❌ Ошибка при отправке в Telegram:", responseData);
      return new Response(
        JSON.stringify({ 
          error: "Failed to send message to Telegram", 
          details: responseData 
        }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Проверяем, куда ушло сообщение
    const actualChatId = responseData.result?.chat?.id;
    console.log("✅ Сообщение успешно отправлено");
    console.log("📬 Фактический chat_id получателя:", actualChatId);
    
    if (actualChatId !== SUPERGROUP_CHAT_ID) {
      console.warn("⚠️ ВНИМАНИЕ: Сообщение отправлено не в ту группу!");
      console.warn(`   Ожидался: ${SUPERGROUP_CHAT_ID}`);
      console.warn(`   Получен: ${actualChatId}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        chatId: actualChatId,
        message: "Message sent successfully" 
      }), 
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Критическая ошибка в функции send-telegram:", errorMessage);
    
    return new Response(
      JSON.stringify({ error: errorMessage }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

console.log("🚀 Edge Function запущена");
console.log("🎯 Настроена отправка в супергруппу:", SUPERGROUP_CHAT_ID);

serve(handler);
