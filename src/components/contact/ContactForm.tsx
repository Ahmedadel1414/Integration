"use client";

import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col w-full">
      <label htmlFor="name" className="text-xl font-medium mb-2.5">
        {t('contact.form.name')}
      </label>
      <input
        className="p-3 bg-gray-100 rounded-lg mb-5 border-[2px] border-primary outline-none focus:border-[3px]"
        type="name"
        name="name"
        required
        aria-label="Name Input"
      />
      <label htmlFor="email" className="text-xl font-medium mb-2.5">
        {t('contact.form.email')}
      </label>
      <input
        className="p-3 bg-gray-100 rounded-lg mb-5 border-[2px] border-primary outline-none focus:border-[3px]"
        type="email"
        name="email"
        required
        aria-label="email Input"
      />
      <label htmlFor="message" className="text-xl font-medium mb-2.5">
        {t('contact.form.message')}
      </label>
      <textarea
        className="px-3 pb-32 pt-3 bg-gray-100 rounded-lg border-[2px] border-primary outline-none focus:border-[3px]"
        name="message"
        required
        aria-label="Your Message Textarea"
      ></textarea>

      <button className="inline-block bg-primary text-white px-11 py-3 rounded-md ml-auto my-10 hover:bg-opacity-80">
        {t('contact.form.send')}
      </button>
    </form>
  );
};

export default ContactForm;
