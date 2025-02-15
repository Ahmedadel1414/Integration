import AboutSection from "@/components/about-us/AboutSection";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero/Hero";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import OurServices from "@/components/OurServices/OurServices";
import TrustedBy from "@/components/Trusted-by/TrustedBy";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <div className="py-48">
        <TrustedBy />
      </div>
      <OurServices />
      <InsuranceTypes />
      <Contact />
    </>
  );
};

export default Home;
