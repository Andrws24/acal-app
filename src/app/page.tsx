import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyACAL } from "@/components/sections/why-acal";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyACAL />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
