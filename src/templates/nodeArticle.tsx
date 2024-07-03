import React, { FC } from "react";
import Helmet from "react-helmet";
import { graphql, Slice } from "gatsby";
import Contact from "../components/contact";

// assets
import imageHero from "../assets/img/image-hero.jpg";
import { Hero } from "../components";
import RichText from "../components/RichText";

const NodePage: FC<any> = ({ data: drupal }) => {
  const data = drupal.drupal.nodeById;
  return (
    <>
      <Helmet htmlAttributes={{ lang: "es_mx" }}>
        <title>Labfem | {data.title}</title>
      </Helmet>
      <Slice alias="navigation" />
      <Hero
        image={imageHero}
        title="Bienvenido a Labfem"
        description={`<p>“Cada paso hacia la igualdad es un paso hacia un mundo mejor.”</p>`}
      />
      <div className="container mx-auto article mt-8 lg:mt-16 px-6">
        <h2 className="text-3xl font-bold text-[#af277d] mb-8">
          {data.title}
        </h2>
        <RichText>{data.fieldBody?.processed}</RichText>
      </div>
      <Contact />
      <Slice alias="footer" />
    </>
  );
};

export default NodePage;

export const pageQuery = graphql`
  query nodeArticle($id: String!) {
    drupal {
      nodeById(id: $id) {
        __typename
        title
        ...NodeArticle
      }
    }
  }
`;
