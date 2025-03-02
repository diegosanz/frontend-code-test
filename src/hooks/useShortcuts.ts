import { addBox } from "../stores/actions/addBox";
import store from "../stores/MainStore";
import { useKeyCombination } from "./useKeyCombination";

export const useShortcuts = () => {
  useKeyCombination(["Escape"], () => store.unSelectAllBoxes());
  useKeyCombination(["Delete"], () => store.removeSelectedBoxes());

  useKeyCombination(
    ["Control", "z"],
    () => store.history.canUndo && store.history.undo()
  );
  useKeyCombination(
    ["Control", "y"],
    () => store.history.canRedo && store.history.redo()
  );
  useKeyCombination(
    ["Meta", "z"],
    () => store.history.canUndo && store.history.undo()
  );
  useKeyCombination(
    ["Meta", "y"],
    () => store.history.canRedo && store.history.redo()
  );

  useKeyCombination(["Shift", "n"], () => addBox());

  useKeyCombination(["arrowdown"], () =>
    store.setSelectedBoxesRelativePosition(0, 1)
  );
  useKeyCombination(["arrowup"], () =>
    store.setSelectedBoxesRelativePosition(0, -1)
  );
  useKeyCombination(["arrowleft"], () =>
    store.setSelectedBoxesRelativePosition(-1, 0)
  );
  useKeyCombination(["arrowright"], () =>
    store.setSelectedBoxesRelativePosition(1, 0)
  );
  useKeyCombination(["Alt", "arrowdown"], () =>
    store.setSelectedBoxesRelativePosition(0, 10)
  );
  useKeyCombination(["Alt", "arrowup"], () =>
    store.setSelectedBoxesRelativePosition(0, -10)
  );
  useKeyCombination(["Alt", "arrowleft"], () =>
    store.setSelectedBoxesRelativePosition(-10, 0)
  );
  useKeyCombination(["Alt", "arrowright"], () =>
    store.setSelectedBoxesRelativePosition(10, 0)
  );
  useKeyCombination(["Shift", "arrowdown"], () =>
    store.setSelectedBoxesRelativePosition(0, 100)
  );
  useKeyCombination(["Shift", "arrowup"], () =>
    store.setSelectedBoxesRelativePosition(0, -100)
  );
  useKeyCombination(["Shift", "arrowleft"], () =>
    store.setSelectedBoxesRelativePosition(-100, 0)
  );
  useKeyCombination(["Shift", "arrowright"], () =>
    store.setSelectedBoxesRelativePosition(100, 0)
  );
};
