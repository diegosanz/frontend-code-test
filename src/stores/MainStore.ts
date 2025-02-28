import { types } from "mobx-state-tree";
import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";
import BoxModel, { BoxModelType } from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
  })
  .actions((self) => {
    return {
      addBox(box: BoxModelType) {
        self.boxes.push(box);
      },
    };
  })
  .views((self) => ({}));

const store = MainStore.create();

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0,
});

store.addBox(box1);

export default store;
