import uuid from "uuid/v4";
import store from "../stores/MainStore";
import BoxModel from "../stores/models/Box";
import getRandomColor from "../utils/getRandomColor";

type addBoxProps = {
  left: number;
  top: number;
};

export const addBox = ({ left, top }: addBoxProps = { left: 0, top: 0 }) => {
  const newBox = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left,
    top,
  });
  store.addBox(newBox);
};
