import React from "react";

const RichText = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
  );
};

export default RichText;
