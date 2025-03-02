import { observer } from "mobx-react";
import React from "react";
import { addBox } from "../stores/actions/addBox";
import store from "../stores/MainStore";
import { SelectedBoxesCounter } from "./SelectedBoxesCounter";
import styles from "./Toolbar.module.scss";
import { ToolbarButton } from "./ToolbarButton";

const Toolbar = observer(() => {
  return (
    <div className={styles.toolbar}>
      <ToolbarButton onClick={() => addBox()}>Add Box</ToolbarButton>
      <ToolbarButton onClick={() => store.removeSelectedBoxes()}>
        Remove Box
      </ToolbarButton>
      <ToolbarButton
        disabled={!store.history.canUndo}
        onClick={() => store.history.undo()}
      >
        Undo
      </ToolbarButton>
      <ToolbarButton
        disabled={!store.history.canRedo}
        onClick={() => store.history.redo()}
      >
        Redo
      </ToolbarButton>
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
