import React, { FC } from "react";

import Instagram from "./svg/instagram";
import Mail from "./svg/mail";
import Phone from "./svg/phone";

const iconsMap = {
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

interface IconResolverProps {
  token: keyof typeof iconsMap;
  className?: string;
}

const IconResolver: FC<IconResolverProps> = ({ token, className }) => {
  const Icon = iconsMap[token];
  if (!Icon) {
    return <></>;
  }
  return <Icon className={className} />;
};

export default IconResolver;
