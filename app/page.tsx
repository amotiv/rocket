import { Hero } from "@/components/sections/hero";
import { InteractiveDemo } from "@/components/sections/interactive-demo";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <InteractiveDemo />
      <CtaSection />
      <Contact />
    </div>
  );
}
