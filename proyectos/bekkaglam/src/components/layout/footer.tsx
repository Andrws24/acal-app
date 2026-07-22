import Link from "next/link";
import { Heart, Camera, MessageCircle, Mail, MapPin } from "lucide-react";
import { BEKKAGLAM } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-dark/5 border-t border-primary-light/50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-gradient tracking-tight">
                BEKKAGLAM
              </span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed">
              {BEKKAGLAM.tagline}
            </p>
            <p className="text-sm text-text-muted mt-2">
              {BEKKAGLAM.location}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={BEKKAGLAM.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={BEKKAGLAM.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BEKKAGLAM.email}`}
                className="w-9 h-9 rounded-full bg-white border border-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-text mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link href="/tienda" className="text-sm text-text-muted hover:text-primary">Todos los productos</Link></li>
              <li><Link href="/tienda?categoria=swimwear" className="text-sm text-text-muted hover:text-primary">Swimwear</Link></li>
              <li><Link href="/tienda?categoria=sets-dresses" className="text-sm text-text-muted hover:text-primary">Sets & Dresses</Link></li>
              <li><Link href="/tienda?categoria=sportwear" className="text-sm text-text-muted hover:text-primary">Sportwear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-text mb-4">Ayuda</h4>
            <ul className="space-y-2.5">
              <li><Link href="/nosotros" className="text-sm text-text-muted hover:text-primary">Sobre nosotros</Link></li>
              <li>
                <a href={BEKKAGLAM.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary">
                  Contacto por WhatsApp
                </a>
              </li>
              <li className="text-sm text-text-muted">Solo mensajes, no llamadas</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-light/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Bekkaglam. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-primary fill-primary" /> para las girls
          </p>
        </div>
      </div>
    </footer>
  );
}
