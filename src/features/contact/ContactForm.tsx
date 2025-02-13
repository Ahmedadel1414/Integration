import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="send-message" className="flex flex-col">
        <label htmlFor="name" className="text-xl font-medium pb-1">
          الاسم
        </label>
        <input className="p-3 bg-gray-300 rounded-lg mb-5 " type="name" />
        <label htmlFor="email" className="text-xl font-medium pb-1">
          البريد الالكتروني
        </label>
        <input className="p-3 bg-gray-300 rounded-lg mb-5 " type="email" />
        <label htmlFor="message" className="text-xl font-medium pb-1">
          السرالة
        </label>
        <textarea
          className="px-3 pb-32 pt-3 bg-gray-300 rounded-lg "
          name="message"
        ></textarea>
        <Link
          className="inline-block bg-primary text-white px-11 py-3 rounded-md mx-auto my-10 hover:bg-opacity-80"
          href="/"
        >
          إرسال الرسالة
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
