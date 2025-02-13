import Cards from "@/components/cards/Cards";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="bg-gray-100">
      <div className="container py-10">
        <h2 className="m-auto text-center text-5xl font-semibold pb-5">
          خدماتنا
        </h2>
        <Cards />
        <div className="text-center">
          <Link
            className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
            href="/our-services"
          >
            المزيد من الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
