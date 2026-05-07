"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(t.errorMsg);
    }
  };

  return (
    <div className="flex-1 bg-gray-50/50 dark:bg-slate-900/40 p-8 rounded-3xl border border-white/60 dark:border-slate-700/30">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t.formTitle}</h3>
      
      {status === "success" ? (
        <div className="w-full p-6 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl text-center">
          <p className="text-green-700 dark:text-green-400 font-bold text-lg">{t.successMsg}</p>
          <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-green-600 hover:underline">{t.sendAnother}</button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-500/20">
              {errorMessage}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{t.nameLabel}</label>
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
              placeholder={t.namePlaceholder} 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{t.emailLabel}</label>
            <input 
              type="email" 
              id="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
              placeholder={t.emailPlaceholder} 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{t.messageLabel}</label>
            <textarea 
              id="message" 
              rows={4} 
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none" 
              placeholder={t.messagePlaceholder}
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full py-4 text-center rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100"
          >
            <Send size={18} />
            {status === "loading" ? t.sending : t.sendBtn}
          </button>
        </form>
      )}
    </div>
  );
}
