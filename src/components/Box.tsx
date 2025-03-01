import { observer } from "mobx-react";
import React, { FC } from "react";
import { BoxModelType } from "../stores/models/Box";
import BoxDraggable from "./BoxDraggable";

type BoxProps = BoxModelType;

const Box: FC<BoxProps> = (props) => {
  return (
    <BoxDraggable {...props}>
      <div>Box</div>
    </BoxDraggable>
  );
};

export default observer(Box);
