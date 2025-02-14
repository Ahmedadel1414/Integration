import InsuranceCardsContainer from "@/components/cards/InsuranceCardsContainer";
import { insuranceCategories } from "@/constants/insurance";
import Link from "next/link";

const InsuranceTypes = () => {
  return (
    <>
      <section className="container py-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            أنواع التأمينات بالسوق المصري
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]">
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[0].insuranceSrc}
            insuranceTitle={insuranceCategories[0].insuranceTitle}
            insuranceDescription={insuranceCategories[0].insuranceDescription}
          />
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[1].insuranceSrc}
            insuranceTitle={insuranceCategories[2].insuranceTitle}
            insuranceDescription={insuranceCategories[3].insuranceDescription}
          />
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[4].insuranceSrc}
            insuranceTitle={insuranceCategories[4].insuranceTitle}
            insuranceDescription={insuranceCategories[4].insuranceDescription}
          />
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[5].insuranceSrc}
            insuranceTitle={insuranceCategories[5].insuranceTitle}
            insuranceDescription={insuranceCategories[5].insuranceDescription}
          />
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[6].insuranceSrc}
            insuranceTitle={insuranceCategories[6].insuranceTitle}
            insuranceDescription={insuranceCategories[6].insuranceDescription}
          />
          <InsuranceCardsContainer
            insuranceSrc={insuranceCategories[7].insuranceSrc}
            insuranceTitle={insuranceCategories[7].insuranceTitle}
            insuranceDescription={insuranceCategories[7].insuranceDescription}
          />
        </div>
        <div className="text-center">
          <Link
            className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
            href="/our-services"
          >
            المزيد
          </Link>
        </div>
      </section>
      ;
    </>
  );
};

export default InsuranceTypes;
