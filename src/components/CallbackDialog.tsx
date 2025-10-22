const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!privacyAccepted || !dataAccepted) {
    toast({
      title: "Ошибка",
      description: "Пожалуйста, примите условия обработки данных",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const { error } = await supabase.functions.invoke("send-telegram", {
      body: {
        name,
        phone,
        date: new Date().toISOString(), // добавляем текущую дату
        type: "callback",
      },
    });

    if (error) throw error;

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setName("");
    setPhone("");
    setPrivacyAccepted(false);
    setDataAccepted(false);
    setOpen(false);
  } catch (error) {
    console.error("Error submitting callback request:", error);
    toast({
      title: "Ошибка",
      description: "Не удалось отправить заявку. Попробуйте позже.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
