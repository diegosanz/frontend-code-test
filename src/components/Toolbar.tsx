import { observer } from "mobx-react";
import React from "react";
import { addBox } from "../stores/actions/addBox";
import { SelectedBoxesCounter } from "./SelectedBoxesCounter";

const Toolbar = observer(() => {
  return (
    <div className="toolbar">
      <button onClick={() => addBox()}>Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <SelectedBoxesCounter />
    </div>
  );
});

export default Toolbar;
