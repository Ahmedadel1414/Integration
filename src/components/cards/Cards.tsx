import Card from "@/components/services-card/Card";
import { ourServices } from "@/constants/ourServices";
import {
  FaBuilding,
  FaChartBar,
  FaFileInvoiceDollar,
  FaHeadset,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]">
        <Card
          cardIcon={<FaShieldAlt className="m-auto" />}
          cardTitle={ourServices[0].cardTitle}
          cardParagraph={ourServices[0].cardParagraph}
          cardParagraph2={ourServices[0].cardParagraph2}
        />
        <Card
          cardIcon={<FaChartBar className="m-auto" />}
          cardTitle={ourServices[1].cardTitle}
          cardParagraph={ourServices[1].cardParagraph}
          cardParagraph2={ourServices[1].cardParagraph2}
        />
        <Card
          cardIcon={<FaHeadset className="m-auto" />}
          cardTitle={ourServices[2].cardTitle}
          cardParagraph={ourServices[2].cardParagraph}
          cardParagraph2={ourServices[2].cardParagraph2}
        />
        <Card
          cardIcon={<FaBuilding className="m-auto" />}
          cardTitle={ourServices[3].cardTitle}
          cardParagraph={ourServices[3].cardParagraph}
        />
        <Card
          cardIcon={<FaFileInvoiceDollar className="m-auto" />}
          cardTitle={ourServices[4].cardTitle}
          cardParagraph={ourServices[4].cardParagraph}
        />
        <Card
          cardIcon={<FaUserTie className="m-auto" />}
          cardTitle={ourServices[5].cardTitle}
          cardParagraph={ourServices[5].cardParagraph}
        />
      </div>
    </>
  );
};

export default Cards;
