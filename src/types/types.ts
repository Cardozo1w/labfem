export interface CtaProps {
  to: string;
  label: string;
  target?: string;
}

export interface HeroProps {
  title: string;
  description?: string;
  image: string;
  ctas?: CtaProps[];
}

export interface ImageBlockProps {
  id?: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description?: string;
  imageOrientation?: "left" | "right";
}

export interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export interface CardGridProps {
  id?: string;
  cards: CardGridProps[];
}

export interface Link {
  label: string;
  to: string;
}

export interface NavigationProps {
  sliceContext: {
    navigation: Link[];
  };
}
