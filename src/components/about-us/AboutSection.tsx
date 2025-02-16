import AboutUs from "@/components/about-us/AboutUs";
import Link from "next/link";
import ImagSlider from "../imagSlider/ImagSlider";

const AboutSection = () => {
  return (
    <section className="py-10">
      <AboutUs />

      <ImagSlider />

      <Link
        className="block w-fit mx-auto mt-10 bg-primary text-white px-11 py-3 rounded-md hover:bg-opacity-80"
        href="/about-us"
      >
        المزيد عنا
      </Link>
    </section>
  );
};

export default AboutSection;
