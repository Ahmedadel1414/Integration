import Image from "next/image";

type Insurances = {
  insuranceSrc: string;
  insuranceTitle: string;
  insuranceDescription: string;
};

const InsuranceCardsContainer = ({
  insuranceSrc,
  insuranceTitle,
  insuranceDescription,
}: Insurances) => {
  return (
    <>
      <div className="flex flex-col border-[4px] border-solid border-primary shadow-lg shadow-zinc-300 overflow-hidden bg-white transition-all duration-500 hover:-translate-y-5">
        <Image
          alt="Insurance Type"
          src={insuranceSrc}
          width={500}
          height={500}
          className="w-full"
        />

        <h3 className="mx-auto text-xl font-semibold py-5">{insuranceTitle}</h3>
        <p className="text-center pb-12 px-10">{insuranceDescription}</p>
      </div>
    </>
  );
};

export default InsuranceCardsContainer;
