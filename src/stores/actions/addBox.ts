import uuid from "uuid/v4";
import getRandomColor from "../../utils/getRandomColor";
import store from "../MainStore";
import BoxModel from "../models/Box";

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
