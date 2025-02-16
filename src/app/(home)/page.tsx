import AboutSection from "@/components/about-us/AboutSection";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero/Hero";
import ImagSlider from "@/components/imagSlider/ImagSlider";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import OurServices from "@/components/OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <div className="py-48">
        <ImagSlider />
      </div>
      <OurServices />
      <InsuranceTypes />
      <Contact />
    </>
  );
};

export default Home;
