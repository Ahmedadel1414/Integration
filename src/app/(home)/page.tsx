import AboutSection from "@/components/about-us/AboutSection";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero/Hero";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import OurServices from "@/components/OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurServices />
      {/* Static */}
      <InsuranceTypes />
      <Contact />
    </>
  );
};

export default Home;
