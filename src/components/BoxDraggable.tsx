import { observer } from "mobx-react";
import React, { FC } from "react";
import { BoxModelType } from "../stores/models/Box";

type BoxDraggableProps = BoxModelType;

const BoxDraggable: FC<BoxDraggableProps> = (props) => {
  return (
    <div
      id={props.id}
      className="box"
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default observer(BoxDraggable);
