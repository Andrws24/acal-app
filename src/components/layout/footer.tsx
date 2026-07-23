import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAVIGATION, SERVICES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Image
                src="/images/logo-icon.png"
                alt={`${COMPANY.name} logo`}
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="font-semibold text-lg text-text">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-sm text-text/60 leading-relaxed mb-4">
              {COMPANY.slogan}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background flex items-center justify-center text-text/50 hover:text-primary hover:bg-primary/5 transition-all"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background flex items-center justify-center text-text/50 hover:text-primary hover:bg-primary/5 transition-all"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">FB</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-text mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-text mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/#servicios"
                    className="text-sm text-text/60 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-text mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-text/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-text/60">
                  <MapPin className="w-4 h-4" />
                  {COMPANY.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text/40">
            &copy; {currentYear} {COMPANY.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-text/30">
            ACAL es una marca en proceso de formalización en Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
