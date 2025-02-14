import AboutSection from "@/features/about-section/AboutSection";
import Contact from "@/features/contact/Contact";
import Hero from "@/features/hero/Hero";
import InsuranceTypes from "@/features/insurance-types/InsuranceTypes";
import OurServices from "@/features/our-services/OurServices";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurServices />
      <InsuranceTypes />
      <Contact />
    </>
  );
};

export default Home;
