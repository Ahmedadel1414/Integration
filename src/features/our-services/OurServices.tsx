import Cards from "@/components/cards/Cards";
import Link from "next/link";

type OurServicesProps = {
  displayHeading?: boolean;
};

const OurServices = ({ displayHeading = true }: OurServicesProps) => {
  return (
    <section className={`bg-gray-100 ${displayHeading ? "py-10" : "pb-10"}`}>
      <div className="container text-center">
        {displayHeading && (
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              خدماتنا
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        )}

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
