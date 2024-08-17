import { graphql } from "gatsby";

export const NodePage = graphql`
  fragment NodePage on Drupal_NodePage {
    title
    fieldComponentes {
      __typename
      ...FieldNodePageFieldComponentes
    }
  }
`;

export const NodeArticle = graphql`
  fragment NodeArticle on Drupal_NodeArticle {
    title
    fieldBody {
      processed
    }
  }
`;

export const Drupal_FieldNodePageFieldComponents = graphql`
  fragment FieldNodePageFieldComponentes on Drupal_FieldNodePageFieldComponentes {
    entity {
      __typename
      ...ParagraphHero
      ...ParagraphImageblock
      ...ParagraphCardGrid
    }
  }
`;

export const ParagraphHero = graphql`
  fragment ParagraphHero on Drupal_ParagraphHero {
    uuid
    fieldTitle
    fieldDescripcion {
      processed
    }
    fieldImagen {
      url
      alt
    }
  }
`;

export const ParagraphImageblock = graphql`
  fragment ParagraphImageblock on Drupal_ParagraphImageblock {
    uuid
    fieldIdentificador
    fieldTitle
    fieldImagen {
      url
      alt
    }
    fieldDescripcion {
      processed
    }
    fieldImageOrientation
  }
`;

export const ParagraphCardGrid = graphql`
  fragment ParagraphCardGrid on Drupal_ParagraphCardGrid {
    uuid
    fieldIdentificador
    fieldTitle
    fieldCards {
      entity {
        ...ParagraphCard
      }
    }
  }
`;

export const ParagraphCard = graphql`
  fragment ParagraphCard on Drupal_ParagraphCard {
    __typename
    uuid
    fieldTitle
    fieldImagen {
      url
      alt
    }
    fieldDescripcion {
      processed
    }
    fieldCta {
      url {
        path
      }
      title
    }
  }
`;
