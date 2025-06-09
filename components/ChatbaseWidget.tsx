"use client";
import { useEffect } from "react";

export default function ChatbaseWidget() {
  useEffect(() => {
    if (document.getElementById("chatbase-bubble-script")) return;
    const script = document.createElement("script");
    script.id = "chatbase-bubble-script";
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "BFenLc8MMCcIRZF362dFO"); // ID actualizado
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return null;
}
