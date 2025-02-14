import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <h2 className="m-auto text-center text-5xl font-semibold pb-5">
          تواصل معنا
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row mt-10 pb-10">
          <div className="w-full">
            <ContactForm />
          </div>
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
