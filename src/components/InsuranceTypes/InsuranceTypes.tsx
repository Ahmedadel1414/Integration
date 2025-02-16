import InsuranceCardsContainer from "@/components/cards/InsuranceCardsContainer";
import { insuranceCategories } from "@/constants/insurance";
import Link from "next/link";
import ImagSlider from "../imagSlider/ImagSlider";

const InsuranceTypes = () => {
  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4">
              التغطيات التأمينية التى تقدمها الشركة
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]">
            {insuranceCategories.slice(0, 6).map((ins) => (
              <InsuranceCardsContainer
                key={ins.insuranceTitle}
                insuranceSrc={ins.insuranceSrc}
                insuranceTitle={ins.insuranceTitle}
                insuranceDescription={ins.insuranceDescription}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-5">
          <Link
            className="inline-block text-center bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
            href="/our-services"
          >
            المزيد
          </Link>
        </div>
        <div className="text-center bg-white pb-10">
          <ImagSlider />
        </div>
      </section>
    </>
  );
};

export default InsuranceTypes;
