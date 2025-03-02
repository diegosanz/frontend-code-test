import { observer } from "mobx-react";
import React from "react";
import { addBox } from "../stores/actions/addBox";
import store from "../stores/MainStore";
import { SelectedBoxesCounter } from "./SelectedBoxesCounter";

const Toolbar = observer(() => {
  return (
    <div className="toolbar">
      <button onClick={() => addBox()}>Add Box</button>
      <button onClick={() => store.removeSelectedBoxes()}>Remove Box</button>
      <input
        type="color"
        onChange={(event) =>
          store.changeColorToSelectedBoxes(event.target.value)
        }
      />
      <SelectedBoxesCounter />
    </div>
  );
});

export default Toolbar;
