import { IconType } from "react-icons";

type CardProps = {
  CardIcon: IconType;
  cardTitle: string;
  cardParagraph: string;
  cardParagraph2?: string;
};

const Card = ({
  CardIcon,
  cardTitle,
  cardParagraph,
  cardParagraph2,
}: CardProps) => {
  return (
    <div className="text-center bg-white h-[27rem] border-[4px] border-solid border-primary p-10 shadow-lg shadow-zinc-300 transition-all duration-500 hover:-translate-y-5">
      <div className="text-5xl text-center text-secondary">
        {<CardIcon className="mx-auto" />}
      </div>
      <h4 className="text-2xl py-5">{cardTitle}</h4>
      <div>
        <p className="leading-7">{cardParagraph}</p>
        <p className="leading-7">{cardParagraph2}</p>
      </div>
    </div>
  );
};

export default Card;
