import React, { FC } from "react";
import { CardGrid, Hero, ImageBlock } from "../components";

const ParagraphHero: FC<any> = ({ entity }) => {
  return (
    <Hero
      key={entity.uuid}
      title={entity.fieldTitle}
      description={entity.fieldDescripcion?.processed}
      image={entity.fieldImagen?.url}
    />
  );
};

const ParagraphImageblock: FC<any> = ({ entity }) => {
  return (
    <ImageBlock
      key={entity.uuid}
      id={entity.fieldIdentificador}
      title={entity.fieldTitle}
      description={entity.fieldDescripcion?.processed}
      image={{
        src: entity.fieldImagen?.url,
        alt: entity.fieldImagen?.alt,
      }}
      imageOrientation={entity.fieldImageOrientation}
    />
  );
};

const ParagraphCardGrid: FC<any> = ({ entity }) => {
  const cards = entity.fieldCards.map((card: any) => {
    return {
      title: card.entity.fieldTitle,
      description: card.entity.fieldDescripcion?.processed,
      image: {
        src: card.entity.fieldImagen?.url,
        alt: card.entity.fieldImagen?.alt,
      },
      cta: {
        to: card.entity.fieldCta.url.path,
        label: card.entity.fieldCta.title
      }
    };
  });
  return (
    <CardGrid id={entity.fieldIdentificador} key={entity.uuid} cards={cards} />
  );
};

export const resolve: FC<any> = (entity) => {
  if (!entity.__typename) {
    return <></>;
  }
  const componentsMap: any = {
    ParagraphHero,
    ParagraphImageblock,
    ParagraphCardGrid,
  };

  const entityTypeName = entity.__typename?.replace("Drupal_", "");

  if (componentsMap.hasOwnProperty(entityTypeName)) {
    return componentsMap[entityTypeName]({ entity });
  }

  return <></>;
};

export const componentResolver: FC<any> = (data) => {
  const components: any = [];
  if (data) {
    data.forEach((item: any) => {
      const { entity } = item;
      components.push(resolve(entity || item));
    });
  }

  return components;
};
