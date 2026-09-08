import Image from "next/image";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/constants";

const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.png"
              alt={`${COMPANY.name} logo`}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <div>
              <p className="font-semibold text-lg text-text">
                {COMPANY.name}
              </p>
              <p className="text-sm text-muted">{COMPANY.slogan}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-base">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-text hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-whatsapp" />
              WhatsApp: {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2.5 text-text hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-muted" />
              {COMPANY.email}
            </a>
            <p className="flex items-center gap-2.5 text-text">
              <Clock className="w-5 h-5 text-muted" />
              {COMPANY.hours}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted">
            &copy; {currentYear} {COMPANY.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-muted">Hecho en Colombia</p>
        </div>
      </div>
    </footer>
  );
}