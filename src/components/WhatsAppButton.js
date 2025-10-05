// src/app/components/WhatsAppButton.js

'use client'

export default function WhatsAppButton() {
  const phoneNumber = "905000000000"; 
  const message = "Merhaba, web siteniz üzerinden ulaşıyorum.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="WhatsApp üzerinden iletişime geçin"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M12.04 2C6.49 2 2 6.3 2 11.57c0 2.05.66 3.95 1.77 5.53L2 22l5.09-1.65c1.47.81 3.17 1.28 4.95 1.28 5.55 0 10.04-4.3 10.04-9.57S17.59 2 12.04 2zm.02 17.09c-1.52 0-2.92-.42-4.11-1.16l-.29-.17-3.01.97.99-2.92-.19-.3c-.99-1.41-1.52-3.03-1.52-4.73 0-4.54 3.84-8.24 8.56-8.24s8.56 3.7 8.56 8.24-3.84 8.31-8.56 8.31zm4.72-6.22c-.26-.13-1.52-.75-1.76-.83-.23-.08-.4-.12-.57.13-.17.25-.65.83-.8 1-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.27-.77-.68-1.29-1.52-1.44-1.77-.15-.25-.02-.39.11-.52.11-.11.26-.3.4-.46.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.35-.78-1.85-.2-.48-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.13.17 1.78 2.7 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.52-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.23-.17-.49-.3z" />
      </svg>
    </a>
  );
}