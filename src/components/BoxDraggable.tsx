import clsx from "clsx";
import { observer } from "mobx-react";
import React, { FC } from "react";
import { BoxModelType } from "../stores/models/Box";
import styles from "./BoxDraggable.module.scss";

export type BoxDraggableProps = BoxModelType;

const BoxDraggable: FC<BoxDraggableProps> = ({
  id,
  color,
  left,
  top,
  width,
  height,
  isSelected,
  toggleSelected,
  children,
}) => {
  return (
    <div
      id={id}
      className={clsx([styles.boxDraggable, isSelected ? styles.selected : ""])}
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        transform: `translate(${left}px, ${top}px)`,
      }}
      onClick={() => toggleSelected()}
    >
      {children}
    </div>
  );
};

export default observer(BoxDraggable);
