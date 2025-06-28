import { match } from "ts-pattern";
import { Telegram } from "./lib/telegram/telegram";

const tdClient = new tdweb.default({
  jsLogVerbosityLevel: "error",
  onUpdate(update) {
    match(update["@type"]).with("updateAuthorizationState", () => {
      match(update.authorization_state)
        .with({ "@type": "authorizationStateWaitTdlibParameters" }, () => {
          tdClient.send({
            "@type": "setTdlibParameters",
            database_directory: "tdlib",
            use_message_database: true,
            use_secret_chats: false,
            api_id: parseInt(import.meta.env.VITE_TELEGRAM_API_ID),
            api_hash: import.meta.env.VITE_TELEGRAM_API_HASH,
            system_language_code: "en",
            device_model: navigator.userAgent,
            application_version: "0.0.1",
          });
        })
        .with({ "@type": "authorizationStateWaitPhoneNumber" }, () => {
          const phoneNumber = prompt("Enter your phone number");

          if (!phoneNumber) return;

          tdClient.send({
            "@type": "setAuthenticationPhoneNumber",
            phone_number: phoneNumber,
          });
        })
        .with({ "@type": "authorizationStateWaitCode" }, () => {
          const code = prompt("Enter the code");
          if (!code) return;

          tdClient.send({
            "@type": "checkAuthenticationCode",
            code,
          });
        })
        .with({ "@type": "authorizationStateReady" }, async () => {
          const telegram = new Telegram(tdClient);

          const { chatIDs } = await telegram.getChats({ limit: 100 });

          for (const chatId of chatIDs) {
            const chat = await tdClient.send({
              "@type": "getChatHistory",
              chat_id: chatId,
              from_message_id: 0,
              offset: -1,
              limit: 20,
              only_local: false,
            });

            console.log(chat);
          }
        });
    });
  },
});
