import React, { FC } from "react";
import { ImageBlockProps } from "../../types/types";
import RichText from "../RichText";

const ImageBlock: FC<ImageBlockProps> = ({
  id,
  image,
  title,
  description,
  imageOrientation = "left",
}) => {
  return (
    <section id={id} className="bg-white py-4 lg:py-16 px-6 md:px-8 lg:px-12">
      <div
        className={`container mx-auto flex flex-col ${
          imageOrientation === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between`}
      >
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-[#af277d] mb-4">{title}</h2>
          <RichText className="text-[#666666] mb-8">
            {description as string}
          </RichText>
        </div>
      </div>
    </section>
  );
};

export default ImageBlock;
