import React, { FC, MouseEventHandler } from "react";

import { observer } from "mobx-react";
import { addBox } from "../actions/addBox";
import store from "../stores/MainStore";
import Box from "./Box";

type CanvasProps = {
  store: typeof store;
};

const Canvas: FC<CanvasProps> = ({ store }) => {
  const onDoubleClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    addBox({ left: ev.clientX - rect.left, top: ev.clientY - rect.top });
  };

  return (
    <div className="canva" onDoubleClick={onDoubleClick}>
      {store.boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
        />
      ))}
    </div>
  );
};

export default observer(Canvas);
