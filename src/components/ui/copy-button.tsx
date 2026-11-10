"use client";

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
  onCopied?: () => void;
}

export function CopyButton({
  value,
  label = "Copiar",
  className,
  onCopied,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // `navigator.clipboard` no existe en HTTP plano ni en navegadores
      // antiguos. Este método funciona en más contextos a costa de ser legacy.
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    onCopied?.();
    setTimeout(() => setCopied(false), 2000);
  }, [value, onCopied]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copiado" : label}
      title={copied ? "Copiado" : label}
      className={cn(
        "inline-flex items-center justify-center rounded-lg p-2 text-muted transition-colors hover:bg-primary/5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        copied && "text-secondary",
        className
      )}
    >
      {copied ? (
        <Check className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Copy className="w-4 h-4" aria-hidden="true" />
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${value} copiado al portapapeles` : ""}
      </span>
    </button>
  );
}
