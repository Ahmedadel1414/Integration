"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const WorkFlowSteps = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          {t("workflowSteps.title")}
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Assignment and Information Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.assignment.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.assignment.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Insurance Companies Communication */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.communication.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.communication.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Broker's Role */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.brokerRole.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.brokerRole.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Information Analysis */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.analysis.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.analysis.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Negotiation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.negotiation.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.negotiation.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Final Recommendations */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("workflowSteps.recommendations.title")}
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(t("workflowSteps.recommendations.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">{t("contact.title")}</p>
              <p className="text-secondary font-semibold mt-2">
                <Link
                  className="underline underline-offset-2"
                  href="mailto:director@iibeg.com"
                >
                  director@iibeg.com
                </Link>
              </p>
              <p className="text-gray-600 mt-1">{t("contact.phone")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowSteps;
