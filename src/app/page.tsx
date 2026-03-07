import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Procedures from "@/components/sections/Procedures";
import ObraSocialBanner from "@/components/sections/ObraSocialBanner";
import Resultados from "@/components/sections/Resultados";
import GoogleReviews from "@/components/sections/GoogleReviews";
import About from "@/components/sections/About";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Team from "@/components/sections/Team";
import InternationalPatients from "@/components/sections/InternationalPatients";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import Map from "@/components/sections/Map";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Procedures />
      <ObraSocialBanner />
      <Resultados />
      <GoogleReviews />
      <ProcessSteps />
      <Team />
      <InternationalPatients />
      <FAQ />
      <BlogPreview />
      <Map />
      <ContactForm />
    </>
  );
}
