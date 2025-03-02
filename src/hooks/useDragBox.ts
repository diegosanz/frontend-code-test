import interact from "interactjs";
import { useEffect } from "react";
import store from "../stores/MainStore";

type useInteractableProps = {
  ref: React.RefObject<HTMLElement>;
  setRelativePosition: (left: number, top: number) => void;
};

export const useDragBox = ({
  ref,
  setRelativePosition,
}: useInteractableProps) => {
  useEffect(() => {
    if (!ref.current) return;

    const interactable = interact(ref.current).draggable({
      listeners: {
        move(event) {
          store.setSelectedBoxesRelativePosition(event.dx, event.dy);
        },
      },
      autoScroll: true,
    });

    return () => interactable.unset();
  }, [ref, setRelativePosition]);
};
