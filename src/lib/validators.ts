export const validateEmoji = (name: string) => {
  const emojiRejex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;

  if (!emojiRejex.test(name)) {
    return "Только Emoji";
  }

  return null;
};

export const validateMessage = (msg: string) => {
  if (msg.length < 1) {
    return "Пустое поле";
  }

  return null;
};
