import { introduction1, introduction2 } from "@/constants/aboutUs";
import Image from "next/image";

type AboutUsProps = {
  displayHeading?: boolean;
};

const AboutUs = ({ displayHeading = true }: AboutUsProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 container">
      {displayHeading && (
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      )}

      {/* About Cards Container */}
      <div className="space-y-8">
        {/* About Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1 p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                {introduction1.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[300px] lg:h-auto relative">
              <Image
                src="/assets/about-us-1.webp"
                alt="Insurance brokerage services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* About Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[300px] lg:h-auto relative">
              <Image
                src="/assets/about-us-2.webp"
                alt="Insurance consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                {introduction2.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
