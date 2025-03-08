import Cards from "@/components/cards/Cards";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type OurServicesProps = {
  displayHeading?: boolean;
};

const OurServices = ({ displayHeading = true }: OurServicesProps) => {
  const { t } = useTranslation();

  return (
    <section className={`${displayHeading ? "py-10" : "pb-10"}`}>
      <div className="container text-center">
        {displayHeading && (
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("ourServices.title")}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        )}
        <Cards />
        {displayHeading && (
          <div className="text-center">
            <Link
              className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
              href="/our-services"
            >
              {t("ourServices.viewMore")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
