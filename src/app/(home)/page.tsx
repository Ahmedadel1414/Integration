import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero/Hero";
import ImagSlider from "@/components/imagSlider/ImagSlider";
import Statistics from "@/components/statistics/Statistics";
import FAQ from "@/components/faq/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <ImagSlider />
      <FAQ />
      <Contact displayHeading />
    </>
  );
};

export default Home;
