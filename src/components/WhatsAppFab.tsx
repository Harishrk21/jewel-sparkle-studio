import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919986688313"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-pulse-ring" />
        <div className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-colors">
          <MessageCircle size={24} className="text-white" />
        </div>
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-elevated text-ivory text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-body">
        Chat with us
      </span>
    </a>
  );
}
