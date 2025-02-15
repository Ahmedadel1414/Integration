import Card from "@/components/services-card/Card";
import { ourServices } from "@/constants/ourServices";

const Cards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]">
      {ourServices.map((service) => (
        <Card
          key={service.cardTitle}
          CardIcon={service.cardIcon}
          cardTitle={service.cardTitle}
          cardParagraph={service.cardParagraph}
          cardParagraph2={service.cardParagraph2}
        />
      ))}
    </div>
  );
};

export default Cards;
