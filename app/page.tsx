import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
