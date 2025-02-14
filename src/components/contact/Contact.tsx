import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row mt-20 pb-10">
          <ContactForm />

          <Image
            src="/assets/home-imgs/hero.jpg"
            alt="hero"
            width={550}
            height={450}
            className="border rounded-xl min-w-full max-h-[430px] lg:min-w-[450px] xl:min-w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
