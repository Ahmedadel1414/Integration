import Image from "next/image";
import { trusted } from "@/constants/trustedByImages";

const TrustedBy = () => {
  return (
    <section>
      <div className="text-center pb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          موثوق بنا من قبل شركات التأمين الرائدة فى السوق المصرى
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="py-5 bg-gray-100 ">
        <div className="flex justify-center mx-auto w-3/4 px-5 items-center flex-wrap gap-10">
          {trusted.map((t, index) => (
            <div key={index}>
              <Image
                src={t.trustedSrc}
                width={100}
                height={100}
                alt={t.companies}
                loading="eager"
                className="mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
