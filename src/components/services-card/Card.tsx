import Link from "next/link";

type CardProps = {
  cardIcon: React.ReactNode;
  cardTitle: string;
  cardParagraph: string;
  cardParagraph2?: string;
  more?: string;
};

const Card = ({
  cardIcon,
  cardTitle,
  cardParagraph,
  cardParagraph2,
  more,
}: CardProps) => {
  return (
    <div className="text-center bg-white border border-gray-200 p-10 rounded-lg shadow-lg shadow-zinc-300">
      <div className="text-5xl text-center text-primary">{cardIcon}</div>
      <h4 className="text-2xl py-5">{cardTitle}</h4>
      <div>
        <p>
          {cardParagraph}
          <span className="text-primary">
            <Link href={"/our-services"}>{more}</Link>
          </span>
        </p>
        <p>{cardParagraph2}</p>
      </div>
    </div>
  );
};

export default Card;
