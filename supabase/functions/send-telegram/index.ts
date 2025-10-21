// server.ts
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TelegramRequest {
  phone: string;
  date: string;
  name?: string;
}

// 📌 Точный ID супергруппы (обязательно отрицательный)
const TARGET_CHAT_ID = -1002916514018;

const handler = async (req: Request): Promise<Response> => {
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
    const { phone, date, name }: TelegramRequest = await req.json();

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

    const nameText = name ? `👤 Имя: ${name}\n` : "";
    const message = `🎉 Новая заявка на бронирование!\n\n${nameText}📞 Телефон: ${phone}\n📅 Дата мероприятия: ${date}\n\n⏰ Время заявки: ${new Date().toLocaleString("ru-RU")}`;

    console.log("📤 Отправка в супергруппу:", TARGET_CHAT_ID, phone, date);

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
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
      console.error("Ошибка Telegram API:", responseData);
      return new Response(JSON.stringify({ error: "Failed to send message", details: responseData }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("✅ Сообщение успешно отправлено в группу:", TARGET_CHAT_ID);

    return new Response(JSON.stringify({ success: true, data: responseData }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Ошибка функции send-telegram:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);
