import { Instance, types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#FFF000",
    left: 200,
    top: 100,
  })
  .volatile((self) => ({
    isSelected: false,
  }))
  .actions((self) => ({
    toggleSelected() {
      self.isSelected = !self.isSelected;
    },
    setRelativePosition(x: number, y: number) {
      self.left = self.left + x;
      self.top = self.top + y;
    },
    unSelect() {
      self.isSelected = false;
    },
    setColor(color: string) {
      self.color = color;
    },
  }));

export type BoxModelType = Instance<typeof BoxModel>;

export default BoxModel;
