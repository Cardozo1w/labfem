import React, { FC } from "react";
import Helmet from "react-helmet";
import { graphql, Slice } from "gatsby";
import { componentResolver } from "../utils/component-resolver";
import Contact from "../components/contact";

const NodePage: FC<any> = ({ data: drupal }) => {
  const data = drupal.drupal.nodeById;
  const components = componentResolver(data.fieldComponentes);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "es_mx" }}>
        <title>Labfem | {data.title}</title>
      </Helmet>
      <Slice alias="navigation" />
      {components}
      <Contact />
      <Slice alias="footer" />
    </>
  );
};

export default NodePage;

export const pageQuery = graphql`
  query nodePage($id: String!) {
    drupal {
      nodeById(id: $id) {
        __typename
        title
        ...NodePage
      }
    }
  }
`;
