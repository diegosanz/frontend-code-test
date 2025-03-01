import { observer } from "mobx-react";
import React from "react";
import { addBox } from "../stores/actions/addBox";

const Toolbar = observer(() => {
  return (
    <div className="toolbar">
      <button onClick={() => addBox()}>Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  );
});

export default Toolbar;
