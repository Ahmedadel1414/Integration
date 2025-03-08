"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import i18next from "i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200" dir={i18next.dir()}>
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-right">
          {/* Logo and Legal Links Section */}
          <div className="flex flex-col items-center md:items-start col-span-1 lg:col-span-1">
            <div className="mb-2">
              <Link href={"/"}>
                <Image
                  className="w-full max-w-[200px] lg:max-w-[250px]"
                  src={"/assets/logos/hd-logo.jpeg"}
                  alt="Integration Logo"
                  width={300}
                  height={100}
                />
              </Link>
            </div>
          </div>
          {/* Contact Info Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">
                {t("footer.contactUs")}
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>{t("footer.phone")}: 26198101 (202+) - 26198102 (202+)</p>
                <p>
                  {t("footer.mobile")}: 01080631393 (20+) - 01225820227 (20+)
                </p>
                <p>
                  {t("footer.email")}:{" "}
                  <Link
                    href="mailto:director@iibeg.com"
                    className="text-secondary hover:underline underline-offset-2"
                    aria-label="Our Email Address"
                  >
                    director@iibeg.com
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">
                {t("footer.address.title")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("footer.address.value")}
              </p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="lg:col-span-1 text-center">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              {t("footer.followUs")}
            </h3>
            <div className="flex flex-row justify-center space-x-4 space-x-reverse">
              <Link
                href="#"
                className="text-gray-600 hover:text-secondary transition-colors p-2"
                aria-label="Our Social Media Link to Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-secondary transition-colors p-2"
                aria-label="Our Social Media Link to x.com"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.427 1.998H21L13.92 10.13l8.74 11.87h-6.65l-5.63-7.65-6.44 7.65H1l8.02-8.88L1.5 1.999H8.3l4.8 6.84 5.32-6.84z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-secondary transition-colors p-2"
                aria-label="Our Social Media Link to Linked in"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            {t("footer.allRightsReserved")} &copy; {new Date().getFullYear()}{" "}
            Integration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
