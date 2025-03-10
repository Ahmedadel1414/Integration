import { IconType } from "react-icons";
import i18next from "i18next";

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
  const lang = i18next.language
  return (
    <div className={`text-center bg-white border-[4px] border-solid border-primary p-10 shadow-lg shadow-zinc-300 transition-all duration-500 hover:-translate-y-5
    ${lang === "en"? "h-[45rem] xs:h-[28rem]":"h-[38rem] xs:h-[24rem]"}`}>
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
