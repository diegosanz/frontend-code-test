import { onSnapshot, types } from "mobx-state-tree";
import { UndoManager } from "mst-middlewares";
import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";
import BoxModel, { BoxModelType } from "./models/BoxModel";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    history: types.optional(UndoManager, {}),
  })
  .views((self) => ({
    get selectedBoxes(): BoxModelType[] {
      return self.boxes.filter((box) => box.isSelected);
    },
  }))
  .actions((self) => {
    setUndoManager(self);
    return {
      addBox(box: BoxModelType) {
        self.boxes.push(box);
      },
      removeSelectedBoxes() {
        self.selectedBoxes.forEach((box) => {
          self.boxes.remove(box);
        });
      },
      unSelectAllBoxes() {
        self.boxes.forEach((box) => {
          box.unSelect();
        });
      },
      changeColorToSelectedBoxes(color: string) {
        self.selectedBoxes.forEach((box) => {
          box.setColor(color);
        });
      },
      setSelectedBoxesRelativePosition(x: number, y: number) {
        self.selectedBoxes.forEach((box) => {
          box.setRelativePosition(x, y);
        });
      },
    };
  });

// Sorry for the `any` type, but I couldn't find a way to type this properly and the documentation is not very clear
export let undoManager: any = {};
export const setUndoManager = (targetStore: any) => {
  undoManager = targetStore.history;
};

const createNewStore = () => {
  const store = MainStore.create();

  store.addBox(
    BoxModel.create({
      id: uuid(),
      color: getRandomColor(),
      left: 0,
      top: 0,
    })
  );

  return store;
};

const LOCAL_STORAGE_KEY = "genially-main-store";

const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
const store = savedState
  ? MainStore.create(JSON.parse(savedState))
  : createNewStore();

onSnapshot(store, (snapshot) => {
  // We don't want to save the history in the local storage
  const { history, ...dataToSave } = snapshot;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
});

export default store;
