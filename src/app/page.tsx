import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Procedures from "@/components/sections/Procedures";
import Resultados from "@/components/sections/Resultados";
import CasosDeExito from "@/components/sections/CasosDeExito";
import GoogleReviews from "@/components/sections/GoogleReviews";
import InternationalPatients from "@/components/sections/InternationalPatients";
import Team from "@/components/sections/Team";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Procedures />
      <Resultados />
      <CasosDeExito />
      <GoogleReviews />
      <InternationalPatients />
      <Team />
      <BlogPreview />
      <FAQ />
      <ContactForm />
    </>
  );
}
