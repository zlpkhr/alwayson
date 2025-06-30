import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TD from "./lib/td";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>Hello, World!</div>
  </StrictMode>,
);

export const td = new TD({
  apiID: import.meta.env.VITE_TELEGRAM_API_ID,
  apiHash: import.meta.env.VITE_TELEGRAM_API_HASH,
});

td.on("updateAuthorizationState", (update) => {
  const authState = update.authorization_state;

  switch (authState["@type"]) {
    case "authorizationStateWaitPhoneNumber": {
      const phoneNumber = prompt("Enter your phone number");
      if (!phoneNumber) return;

      td.send({
        "@type": "setAuthenticationPhoneNumber",
        phone_number: phoneNumber,
      });

      break;
    }
    case "authorizationStateWaitCode": {
      const code = prompt("Enter the code");
      if (!code) return;

      td.send({
        "@type": "checkAuthenticationCode",
        code,
      });

      break;
    }
  }
});

const chatIDs = await td.getChatIDs();
const messages = await td.getMessages({ chatId: chatIDs[0] });

console.log(messages);
