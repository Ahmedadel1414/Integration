import AboutSection from "@/features/about-section/AboutUs";
import Contact from "@/features/contact/Contact";
import Hero from "@/features/hero/Hero";
import OurServices from "@/features/our-services/OurServices";

const page = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurServices />
      <Contact />
    </>
  );
};

export default page;
