import React, { FC } from "react";

import { observer } from "mobx-react";
import store from "../stores/MainStore";
import Box from "./Box";

type CanvasProps = {
  store: typeof store;
};

const Canvas: FC<CanvasProps> = ({ store }) => {
  return (
    <div className="canva">
      {store.boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          isSelected={box.isSelected}
          toggleSelected={box.toggleSelected}
        />
      ))}
    </div>
  );
};

export default observer(Canvas);
