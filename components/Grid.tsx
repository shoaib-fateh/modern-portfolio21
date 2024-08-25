import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              className={className}
              description={description}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImg={spareImg}
              img={img}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;
