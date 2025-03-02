import clsx from "clsx";
import { observer } from "mobx-react";
import React, { FC, useRef } from "react";
import { useDragBox } from "../hooks/useDragBox";
import store, { undoManager } from "../stores/MainStore";
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
  const mouseDownMeta = useRef<{
    selectedInThisMouseDown: boolean;
    position: { x: number; y: number };
  }>({
    selectedInThisMouseDown: false,
    position: { x: 0, y: 0 },
  });

  useDragBox({
    ref: boxDraggableRef,
    setRelativePosition,
  });

  const onMouseDown = (event: React.MouseEvent) =>
    undoManager.startGroup(() => {
      if (!event.ctrlKey && !isSelected) {
        store.unSelectAllBoxes();
      }

      if (!isSelected) {
        toggleSelected();
        mouseDownMeta.current = {
          selectedInThisMouseDown: true,
          position: { x: event.clientX, y: event.clientY },
        };
      }
    });

  const onMouseUp = () => {
    undoManager.stopGroup();
  };

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (
      !mouseDownMeta.current.selectedInThisMouseDown &&
      mouseDownMeta.current.position.x === event.clientX &&
      mouseDownMeta.current.position.y === event.clientY
    ) {
      toggleSelected();
    }
    mouseDownMeta.current.selectedInThisMouseDown = false;
  };

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
      onMouseDown={onMouseDown}
      onClick={onClick}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
};

export default observer(BoxDraggable);
