import { types } from "mobx-state-tree";
import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";
import BoxModel, { BoxModelType } from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
  })
  .views((self) => ({
    get selectedBoxes(): BoxModelType[] {
      return self.boxes.filter((box) => box.isSelected);
    },
  }))
  .actions((self) => {
    return {
      addBox(box: BoxModelType) {
        self.boxes.push(box);
      },
      removeSelectedBoxes() {
        self.selectedBoxes.forEach((box) => {
          self.boxes.remove(box);
        });
      },
    };
  });

const store = MainStore.create();

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0,
});

store.addBox(box1);

export default store;
