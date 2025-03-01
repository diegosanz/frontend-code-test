import React, { FC } from "react";

import { observer } from "mobx-react";
import store from "../stores/MainStore";
import Box from "./Box";
import styles from "./Canvas.module.scss";

type CanvasProps = {
  store: typeof store;
};

const Canvas: FC<CanvasProps> = ({ store }) => {
  return (
    <div className={styles.canvas}>
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
          setRelativePosition={box.setRelativePosition}
        />
      ))}
    </div>
  );
};

export default observer(Canvas);
