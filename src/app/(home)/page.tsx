import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero/Hero";
import ImagSlider from "@/components/imagSlider/ImagSlider";
import Statistics from "@/components/statistics/Statistics";
import Testimonials from "@/components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Testimonials />
      <ImagSlider />
      <Contact />
    </>
  );
};

export default Home;
