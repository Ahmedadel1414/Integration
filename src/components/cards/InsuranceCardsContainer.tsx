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
      <div className="flex flex-col border border-solid border-gray-200 shadow-lg shadow-zinc-300 rounded-lg overflow-hidden">
        <Image
          alt="Insurance Type"
          src={insuranceSrc}
          width={500}
          height={500}
          className="min-w-full"
        />
        <h3 className="mx-auto text-xl font-semibold py-5">{insuranceTitle}</h3>
        <p className="text-center pb-12 px-10">{insuranceDescription}</p>
      </div>
    </>
  );
};

export default InsuranceCardsContainer;
