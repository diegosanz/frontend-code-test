import { observer } from "mobx-react";
import React, { FC } from "react";
import BoxDraggable, { BoxDraggableProps } from "./BoxDraggable";

type BoxProps = BoxDraggableProps;

const Box: FC<BoxProps> = (props) => {
  return (
    <BoxDraggable {...props}>
      <div>Box</div>
    </BoxDraggable>
  );
};

export default observer(Box);
