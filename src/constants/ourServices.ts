import { IconType } from "react-icons";
import {
  FaBuilding,
  FaChartBar,
  FaFileInvoiceDollar,
  FaHeadset,
  FaHome,
  FaPiggyBank,
  FaRegFileAlt,
  FaShieldAlt,
  FaUserMd,
  FaUserTie,
} from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineInsights } from "react-icons/md";

type OurServicesType = {
  cardIcon: IconType;
  key: number;
  cardTitle: {
    ar: string;
    en: string;
  };
  cardParagraph: {
    ar: string;
    en: string;
  };
  cardParagraph2?: {
    ar: string;
    en: string;
  };
};

export const ourServices: OurServicesType[] = [
  {
    cardIcon: FaShieldAlt,
    cardTitle: {
      ar: "حلول و توصيات تأمينية",
      en: "Insurance Solutions and Recommendations",
    },
    cardParagraph: {
      ar: "لجميع أنواع التأمين الموجودة بالسوق المصري و تقديم نماذج للحلول التأمينية المعمول بها في مصر و الأسواق العالمية.",
      en: "For all types of insurance available in the Egyptian market and providing models for insurance solutions applicable in Egypt and global markets.",
    },
    cardParagraph2: {
      ar: "نقوم بدراسة وثائق التأمين الحالية و تقديم دراسة بمقترحات التطوير للشروط و الأسعار.",
      en: "We study current insurance policies and provide a study with development proposals for terms and prices.",
    },
    key: 1,
  },
  {
    cardIcon: FaChartBar,
    cardTitle: {
      ar: "دراسة الأصول الثابتة و المتداولة",
      en: "Fixed and Current Assets Study",
    },
    cardParagraph: {
      ar: "دراسة الأصول لتقدير المخاطر وتقديم التوصيات لأفضل الحلول التأمينية المناسبة.",
      en: "Studying assets to assess risks and provide recommendations for the best suitable insurance solutions.",
    },
    cardParagraph2: {
      ar: "دراسة تقييم الأصول المؤمنة مقارنة بالقيم السوقية الحالية لضمان تغطية مناسبة وضمان حقوق العملاء في حالة التعويض.",
      en: "Studying the valuation of insured assets compared to current market values to ensure appropriate coverage and guarantee client rights in case of compensation.",
    },
    key: 2,
  },
  {
    cardIcon: FaHeadset,
    cardTitle: {
      ar: "خدمة عملاء محترفة و متخصصة",
      en: "Professional and Specialized Customer Service",
    },
    cardParagraph: {
      ar: "يتم تعيين مسئول للتعامل مع طلبات العميل اليوميه من (تعديل-اضافة-الغاء) او اي طلبات اخري.",
      en: "A representative is assigned to handle daily client requests including (modification-addition-cancellation) or any other requests.",
    },
    cardParagraph2: {
      ar: "نقوم بمتابعة التجديدات و توفير عروض جديدة عند التجديد لايجاد بدائل دائمه للعملاء.",
      en: "We follow up on renewals and provide new offers during renewal to find permanent alternatives for clients.",
    },
    key: 3,
  },
  {
    cardIcon: FaBuilding,
    cardTitle: {
      ar: "ادارة كاملة مع شركات التأمين",
      en: "Complete Management with Insurance Companies",
    },
    cardParagraph: {
      ar: "كل المخاطبات مع شركات التأمين من طلب عروض الأسعار، تقديم دراسة مقارنة للعروض، تقديم التوصيات إلى إصدار وثائق التأمين ومراجعتها وسدادها ثم أي تعديل مطلوب خلال السنة التأمينية وبالتأكيد أيضًـا حـال وجود أي حادث.",
      en: "All communications with insurance companies from requesting quotes, providing comparative study of offers, making recommendations to issuing insurance policies, reviewing and paying them, then any required modification during the insurance year, and certainly also in case of any accident.",
    },
    key: 4,
  },
  {
    cardIcon: FaFileInvoiceDollar,
    cardTitle: {
      ar: "متابعة كاملة للتعويضات",
      en: "Complete Follow-up of Compensations",
    },
    cardParagraph: {
      ar: "في حالة وجود حادث، نقوم بمتابعة كاملة للمطالبات مع شركات التأمين بدءًا من إخطار الحادث، تجميع وتقديم المستندات المطلوبة ومراجعتها ثم التفاوض مع الخبراء المعنيين ومع شركة التأمين وحتى التسوية النهائية ودفع التعويض للعميل.",
      en: "In case of an accident, we provide complete follow-up of claims with insurance companies, starting from accident notification, collecting and submitting required documents, reviewing them, then negotiating with concerned experts and the insurance company until final settlement and compensation payment to the client.",
    },
    key: 5,
  },
  {
    cardIcon: FaUserTie,
    cardTitle: {
      ar: "استشارات تأمينية متخصصة",
      en: "Specialized Insurance Consultations",
    },
    cardParagraph: {
      ar: "في حالة احتياج عميلنا إلى استشارات تأمينية متخصصة سواء في تقييم المخاطر أو تقييم الأصول بغرض التأمين أو تسوية التعويضات ، فإننا نقدم له هذه الخدمات من خلال أفضل و أقوي فريق عمل والذي يملك خبرة كبيرة في جميع أنواع التغطيات التأمينية المختلفة.",
      en: "When our client needs specialized insurance consultations, whether in risk assessment, asset valuation for insurance purposes, or compensation settlement, we provide these services through the best and strongest team with extensive experience in all types of different insurance coverages.",
    },
    key: 6,
  },
  {
    cardIcon: MdOutlineInsights,
    cardTitle: {
      ar: "تحليل المخاطر والتوصيات الوقائية",
      en: "Risk Analysis and Preventive Recommendations",
    },
    cardParagraph: {
      ar: "نقوم بدراسة وتحليل جميع المخاطر المحتملة التي قد تواجه الأفراد والشركات من خلال جمع البيانات وتحليلها باستخدام أحدث الأساليب، ومن ثم نقدم التوصيات الوقائية المناسبة التي تساعد على تقليل احتمالية وقوع الحوادث وضمان استمرارية الأعمال بأعلى مستويات الأمان والاستقرار.",
      en: "We study and analyze all potential risks that may face individuals and companies through data collection and analysis using the latest methods, then provide appropriate preventive recommendations that help reduce the probability of accidents and ensure business continuity with the highest levels of safety and stability.",
    },
    key: 7,
  },
  {
    cardIcon: FaRegFileAlt,
    cardTitle: {
      ar: "إدارة المطالبات التأمينية",
      en: "Insurance Claims Management",
    },
    cardParagraph: {
      ar: "نقوم بإدارة ومتابعة جميع مراحل المطالبات التأمينية بدءًا من لحظة الإبلاغ عن الحادث وجمع كافة المستندات المطلوبة والتنسيق مع الجهات المختصة، وحتى استلام التعويض المستحق، مما يضمن للعميل تجربة سلسة وعادلة دون أي تعقيدات أو تأخير.",
      en: "We manage and follow up on all stages of insurance claims from the moment of reporting the incident, collecting all required documents, coordinating with relevant authorities, until receiving the due compensation, ensuring a smooth and fair experience for the client without any complications or delay.",
    },
    key: 8,
  },
  {
    cardIcon: FaPiggyBank,
    cardTitle: {
      ar: "التخطيط المالي التأميني",
      en: "Insurance Financial Planning",
    },
    cardParagraph: {
      ar: "نعمل على تقديم استراتيجيات تأمينية متكاملة تساعد الأفراد والشركات على تحقيق الأمان المالي من خلال اختيار وتخصيص خطط تأمينية تتناسب مع احتياجاتهم الحالية والمستقبلية، مما يوفر لهم تغطية تأمينية مثالية تضمن الحماية والاستقرار المالي في مختلف الظروف.",
      en: "We work on providing integrated insurance strategies that help individuals and companies achieve financial security by selecting and allocating insurance plans that suit their current and future needs, providing them with ideal insurance coverage that ensures protection and financial stability in various circumstances.",
    },
    key: 9,
  },
  {
    cardIcon: FaUserMd,
    cardTitle: {
      ar: "التأمين الصحي وإدارة الرعاية الطبية",
      en: "Health Insurance and Medical Care Management",
    },
    cardParagraph: {
      ar: "نقدم حلول التأمين الصحي المصممة لتلبية احتياجات الأفراد والشركات، حيث نساعد في اختيار البرامج التأمينية التي توفر تغطية شاملة للخدمات الطبية، ونتولى إدارة المطالبات والتنسيق مع مقدمي الرعاية الصحية لضمان حصول العملاء على أفضل الخدمات بأقل التكاليف الممكنة.",
      en: "We provide health insurance solutions designed to meet the needs of individuals and companies, helping in selecting insurance programs that provide comprehensive coverage for medical services, and handle claims management and coordination with healthcare providers to ensure clients receive the best services at the lowest possible costs.",
    },
    key: 10,
  },
  {
    cardIcon: FaHome,
    cardTitle: {
      ar: "التأمين على الممتلكات والمسؤوليات",
      en: "Property and Liability Insurance",
    },
    cardParagraph: {
      ar: "نساعد الأفراد والشركات في حماية ممتلكاتهم من المخاطر المحتملة من خلال توفير استراتيجيات تأمينية متكاملة تغطي العقارات، المعدات، والممتلكات التجارية، مع تقديم المشورة حول أفضل الحلول لضمان التعويض العادل في حال وقوع أي خسائر أو أضرار.",
      en: "We help individuals and companies protect their properties from potential risks by providing integrated insurance strategies covering real estate, equipment, and commercial properties, while offering advice on the best solutions to ensure fair compensation in case of any losses or damages.",
    },
    key: 11,
  },
  {
    cardIcon: GiLifeBar,
    cardTitle: {
      ar: "التأمين على الحياة والتخطيط للمستقبل",
      en: "Life Insurance and Future Planning",
    },
    cardParagraph: {
      ar: "نعمل على تقديم خطط تأمين على الحياة تناسب مختلف الفئات وتساعد الأفراد والعائلات على تحقيق الأمان المالي والاستقرار، حيث نوفر خيارات متعددة تضمن الحماية ضد المخاطر المستقبلية، بالإضافة إلى خطط ادخارية واستثمارية تعزز الاستقلال المالي على المدى الطويل.",
      en: "We work on providing life insurance plans suitable for various categories and help individuals and families achieve financial security and stability, offering multiple options that ensure protection against future risks, in addition to savings and investment plans that enhance long-term financial independence.",
    },
    key: 12,
  },
];
