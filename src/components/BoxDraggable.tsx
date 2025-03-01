import clsx from "clsx";
import { observer } from "mobx-react";
import React, { FC, useRef } from "react";
import { useDraggable } from "../hooks/useDraggable";
import { BoxModelType } from "../stores/models/BoxModel";
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
  setRelativePosition,
  children,
}) => {
  const boxDraggableRef = useRef<HTMLDivElement>(null);
  useDraggable({
    ref: boxDraggableRef,
    setRelativePosition,
  });

  return (
    <div
      ref={boxDraggableRef}
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
