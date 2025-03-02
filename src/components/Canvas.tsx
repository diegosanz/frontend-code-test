import React, { FC, useRef } from "react";

import { observer } from "mobx-react";
import store from "../stores/MainStore";
import Box from "./Box";
import styles from "./Canvas.module.scss";

type CanvasProps = {
  store: typeof store;
};

const Canvas: FC<CanvasProps> = ({ store }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.canvas}
      ref={canvasRef}
      onClick={() => store.unSelectAllBoxes()}
    >
      {store.boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          isSelected={box.isSelected}
          toggleSelected={box.toggleSelected}
          setRelativePosition={box.setRelativePosition}
          unSelect={box.unSelect}
          setColor={box.setColor}
        />
      ))}
    </div>
  );
};

export default observer(Canvas);
