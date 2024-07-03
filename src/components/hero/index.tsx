import React, { FC } from "react";
import RichText from "../RichText";
import { HeroProps } from "../../types/types";

const Hero: FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-40 px-6 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="lg:w-5/12">
          <h2 className="text-4xl font-bold text-white mb-4 text-center lg:text-start">
            {title}
          </h2>
          <RichText className="text-white text-lg mb-8 text-center lg:text-start">
            {description as string}
          </RichText>
        </div>
      </div>
    </section>
  );
};

export default Hero;
