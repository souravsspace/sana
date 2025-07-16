import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/marketing/Navbar";
import { HeroSection } from "@/components/marketing/HeroSection";
import { UseCasesSection } from "@/components/marketing/UseCasesSection";
import { OpenSourceSection } from "@/components/marketing/OpenSourceSection";
import { PricingSection } from "@/components/marketing/PricingSection";
import { CTASection } from "@/components/marketing/CTASection";
import { FooterSection } from "@/components/marketing/FooterSection";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full relative">
      <div className="block w-px h-full border-l border-border fixed top-0 left-6 z-10"></div>
      <div className="block w-px h-full border-r border-border fixed top-0 right-6 z-10"></div>
      <Navbar />

      <main>
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
          <div className="w-full divide-y divide-border">
            <HeroSection />
            <UseCasesSection />
            <OpenSourceSection />
            <div className="flex flex-col items-center px-4">
              <PricingSection />
            </div>
            <CTASection />
            <FooterSection />
          </div>
        </main>
      </main>
    </div>
  );
}
