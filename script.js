(() => {
  const targetUrl = "https://whatsapp.com/channel/0029VbE1NtMKLaHwnWVBOr0u";
  const button = document.getElementById("whatsappBtn");
  const countdownText = document.getElementById("countdown");

  // Track a real visitor click on the WhatsApp CTA.
  button.addEventListener("click", () => {
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "WhatsAppChannelClick");
    }
  });

  // Auto-open the WhatsApp channel after 7 seconds.
  let secondsLeft = 7;
  const timer = window.setInterval(() => {
    secondsLeft -= 1;
    if (secondsLeft > 0) {
      countdownText.textContent = `WhatsApp channel ${secondsLeft} सेकंड में खुलेगा...`;
      return;
    }
    window.clearInterval(timer);
    countdownText.textContent = "WhatsApp channel खोला जा रहा है...";
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "WhatsAppAutoRedirect");
    }
    window.location.href = targetUrl;
  }, 1000);
})();
