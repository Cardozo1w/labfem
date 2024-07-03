import React from "react";
import "./styles.css";

const RichText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  function updateHtmlContent(htmlContent: string) {
    if (!htmlContent || typeof htmlContent !== "string") {
      return htmlContent;
    }

    const container = document.createElement("div");
    container.innerHTML = htmlContent;

    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      if (currentSrc) {
        const newSrc = "https://dev-labfem.pantheonsite.io" + currentSrc;
        img.setAttribute("src", newSrc);
      }

      const alignClass = img.getAttribute("class");
      if (alignClass) {
        if (alignClass.includes("align-left")) {
          img.classList.add("align-left");
        } else if (alignClass.includes("align-right")) {
          img.classList.add("align-right");
        } else if (alignClass.includes("align-center")) {
          img.classList.add("align-center");
        }
      }
    });

    const figures = container.querySelectorAll("figure");
    figures.forEach((fig) => {
      if (fig.classList.contains("caption-img")) {
        fig.classList.add("caption-img");
      }
    });

    return container.innerHTML;
  }

  const updatedHtmlContent = updateHtmlContent(children);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: updatedHtmlContent }}
    />
  );
};

export default RichText;
