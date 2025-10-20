import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface TelegramRequest {
  phone: string;
  date: string;
  name?: string;
  chatId?: string;
  message?: string;
}

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { phone, date, name, chatId, message: customMessage }: TelegramRequest = await req.json();
    
    // Валидация обязательных полей
    if (!phone || !date) {
      return new Response(
        JSON.stringify({ error: 'Phone and date are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!validatePhone(phone)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN not configured');
      return new Response(
        JSON.stringify({ error: 'Bot token not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Используем правильный chatId супергруппы
    const targetChatId = chatId || Deno.env.get('TELEGRAM_CHAT_ID') || '-1002916514018';
    
    const nameText = name ? `👤 Имя: ${name}\n` : '';
    const additionalText = customMessage ? `\n💬 Дополнительно: ${customMessage}\n` : '';
    
    const message = `🎉 Новая заявка на бронирование!\n\n${nameText}📞 Телефон: ${phone}\n📅 Дата мероприятия: ${date}${additionalText}\n⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}`;
    
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    console.log('Sending message to Telegram:', { 
      chatId: targetChatId, 
      phone: phone.replace(/.(?=.{4})/g, '*'), // Маскируем номер в логах
      date 
    });
    
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
        JSON.stringify({ 
          error: 'Failed to send message to Telegram', 
          details: responseData 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('✅ Message sent successfully to chat:', targetChatId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notification sent successfully',
        data: { chatId: targetChatId }
      }),
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