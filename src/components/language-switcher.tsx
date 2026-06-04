"use client";

import { useLanguage } from "@/context/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ky")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "ky"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        KY
      </button>
    </div>
  );
}
