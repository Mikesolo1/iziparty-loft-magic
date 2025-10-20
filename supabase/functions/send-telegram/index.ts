import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TelegramRequest {
  phone: string;
  date: string;
  chatId?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, date, chatId }: TelegramRequest = await req.json();
    
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN not configured');
      return new Response(
        JSON.stringify({ error: 'Bot token not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Default chat ID (можно получить, отправив боту сообщение и проверив через getUpdates)
    const targetChatId = chatId || '4953636079'; // Замените на ваш chat ID
    
    const message = `🎉 Новая заявка на бронирование!\n\n📞 Телефон: ${phone}\n📅 Дата мероприятия: ${date}\n\n⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}`;
    
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    console.log('Sending message to Telegram:', { chatId: targetChatId, phone, date });
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: targetChatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', responseData);
      return new Response(
        JSON.stringify({ error: 'Failed to send message to Telegram', details: responseData }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Message sent successfully:', responseData);

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error: any) {
    console.error('Error in send-telegram function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
};

serve(handler);
