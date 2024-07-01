import React, { FC } from "react";
import { CardProps } from "../../types/types";
import RichText from "../RichText";

const Card:FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#af277d] mb-2">{title}</h3>
        <RichText className="text-[#666666] mb-4">{description}</RichText>
      </div>
    </div>
  );
};

export default Card;
