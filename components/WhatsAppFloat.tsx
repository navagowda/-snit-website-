import { SITE } from "@/lib/site";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello SNIT, I'd like to know more about your courses and admissions."
  );
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SNIT on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-lg shadow-leaf/40 transition hover:scale-105 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.313.66 4.47 1.803 6.303L4 29l7.884-1.762A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.33l-.35-.207-4.68 1.047 1.02-4.56-.23-.374A9.54 9.54 0 1 1 25.54 15a9.55 9.55 0 0 1-9.539 9.6Zm5.24-7.15c-.287-.144-1.698-.838-1.962-.934-.264-.096-.456-.144-.648.144-.192.288-.744.934-.912 1.126-.168.192-.336.216-.623.072-.288-.144-1.215-.448-2.314-1.428-.855-.762-1.432-1.703-1.6-1.991-.168-.288-.018-.443.126-.587.13-.129.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.562-.888-2.14-.234-.562-.472-.486-.648-.495l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.403 0 1.418 1.032 2.788 1.176 2.98.144.192 2.03 3.1 4.918 4.347.687.297 1.223.474 1.641.607.689.219 1.317.188 1.813.114.553-.083 1.698-.694 1.938-1.365.24-.67.24-1.245.168-1.365-.072-.12-.264-.192-.552-.336Z" />
      </svg>
    </a>
  );
}
