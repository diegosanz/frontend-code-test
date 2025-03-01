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
      // TODO: add a classNames merger
      className={[styles.boxDraggable, isSelected ? styles.selected : ""].join(
        " "
      )}
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
