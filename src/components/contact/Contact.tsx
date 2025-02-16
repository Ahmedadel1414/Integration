import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row mt-20 pb-10">
          <ContactForm />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6910.394485712961!2d31.43184190113411!3d30.002508685325576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d005d1f4387%3A0x3afe7c329b285ed3!2sIntegration%20insurance%20brokerage!5e0!3m2!1sar!2seg!4v1739571601147!5m2!1sar!2seg"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border rounded-xl w-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
