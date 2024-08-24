import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

function Grid() {
  return (
    <section>
      <BentoGrid>
        {[{ title: "Title", description: "Decritpion", id: 1 }].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
