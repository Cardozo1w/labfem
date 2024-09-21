import React, { FC } from "react";
import { CardProps } from "../../types/types";
import RichText from "../RichText";
import { Link } from "gatsby";

const Card: FC<CardProps> = ({ title, image, description, cta }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all ease-linear overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#af277d] mb-2">{title}</h3>
        <RichText className="text-[#666666] mb-4">{description}</RichText>
        {cta?.label && (
          <Link
            to={cta.to}
            className="inline-flex items-center text-[#af277d] font-medium hover:text-[#fab800]"
          >
            {cta.label}
            <div className="h-5 w-5 ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
