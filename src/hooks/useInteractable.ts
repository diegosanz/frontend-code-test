import interact from "interactjs";
import { useEffect } from "react";

type useInteractableProps = {
  ref: React.RefObject<HTMLElement>;
  setRelativePosition: (left: number, top: number) => void;
};

/**
 * Note: for a real project, the dragglable config should be passed as a prop to allow customization
 */
export const useDraggable = ({
  ref,
  setRelativePosition,
}: useInteractableProps) => {
  useEffect(() => {
    if (!ref.current) return;

    const interactable = interact(ref.current).draggable({
      listeners: {
        move(event) {
          setRelativePosition(event.dx, event.dy);
        },
      },
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
      autoScroll: true,
    });

    return () => interactable.unset();
  }, [ref, setRelativePosition]);
};
