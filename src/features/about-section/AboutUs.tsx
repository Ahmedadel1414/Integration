import AboutUs from "@/components/about-us/AboutUs";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="container py-10">
      <AboutUs />
      <div className="text-center">
        <Link
          className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
          href="/about-us"
        >
          المزيد عنا
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
