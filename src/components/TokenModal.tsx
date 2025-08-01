import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface TokenModalProps {
  id?: string;
}

export function TokenModal({ id }: TokenModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBankSelection = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.name === "bank" && target.value === "0163") {
        setIsOpen(true);
      }
    };

    document.addEventListener("change", handleBankSelection);
    return () => {
      document.removeEventListener("change", handleBankSelection);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            ¿Cómo gestionar el token ó clave dinámica?
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <img
            src="/images/pasos-token.webp"
            alt="Pasos para gestionar el token"
            className="max-w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className = "text-center p-8 text-gray-600";
              fallback.innerHTML = `
                <div class="mb-4">
                  <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium mb-2">Pasos para gestionar el token</h3>
                <p class="text-sm">La imagen con los pasos para gestionar el token se mostrará aquí.</p>
                <p class="text-sm mt-2">Por favor, contacte a soporte técnico para obtener las instrucciones completas.</p>
              `;
              target.parentNode?.appendChild(fallback);
            }}
          />
        </div>
        <DialogFooter className="flex sm:justify-center">
          <Button onClick={() => setIsOpen(false)}>Continuar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
