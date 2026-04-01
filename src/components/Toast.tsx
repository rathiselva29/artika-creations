import React, { useState, useCallback } from "react";

interface ToastData { id: number; message: string; }

let addToastGlobal: ((msg: string) => void) | null = null;

export function showToast(message: string) {
  addToastGlobal?.(message);
}

export default function ToastProvider() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  addToastGlobal = useCallback((message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-[100] flex flex-col gap-2">
      {toasts.map(t => (
        <div key={t.id} className="animate-in slide-in-from-right rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg">
          {t.message}
        </div>
      ))}
    </div>
  );
}
