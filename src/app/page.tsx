import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Resultados from "@/components/sections/Resultados";
import GoogleReviews from "@/components/sections/GoogleReviews";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Resultados />
      <GoogleReviews />
      <Team />
      <ContactForm />
    </>
  );
}
