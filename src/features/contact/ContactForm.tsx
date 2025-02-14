const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="name" className="text-xl font-medium mb-2.5">
        الاسم
      </label>
      <input
        className="p-3 bg-gray-200 rounded-lg mb-5 "
        type="name"
        name="name"
        required
      />
      <label htmlFor="email" className="text-xl font-medium mb-2.5">
        البريد الالكتروني
      </label>
      <input
        className="p-3 bg-gray-200 rounded-lg mb-5 "
        type="email"
        name="email"
        required
      />
      <label htmlFor="message" className="text-xl font-medium mb-2.5">
        الرساله
      </label>
      <textarea
        className="px-3 pb-32 pt-3 bg-gray-200 rounded-lg "
        name="message"
        required
      ></textarea>

      <button className="inline-block bg-primary text-white px-11 py-3 rounded-md mx-auto my-10 hover:bg-opacity-80">
        إرسال الرساله
      </button>
    </form>
  );
};

export default ContactForm;
