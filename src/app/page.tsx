import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Guarantee } from "@/components/sections/guarantee";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Guarantee />
        <Process />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}