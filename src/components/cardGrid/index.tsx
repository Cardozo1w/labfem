import React, { FC } from "react";
import Card from "../card";
import { CardGridProps } from "../../types/types";

const CardGrid: FC<CardGridProps> = ({ id, cards }) => {
  return (
    <section id={id} className="bg-white py-4 lg:py-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#af277d] mb-8">
          Articulos Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
