import { observer } from "mobx-react";
import React, { FC } from "react";
import store from "../stores/MainStore";

interface SelectedBoxesCounterProps {}

export const SelectedBoxesCounter: FC<SelectedBoxesCounterProps> = observer(
  () => {
    const pluralRules = new Intl.PluralRules("en-US");

    const boxMap: Record<Intl.LDMLPluralRule, string> = {
      one: "Selected 1 box",
      other: "Selected {{boxLength}} boxes",
      few: "Selected {{boxLength}} boxes",
      many: "Selected {{boxLength}} boxes",
      two: "Selected {{boxLength}} boxes",
      zero: "No boxes selected",
    };

    const boxCount = pluralRules.select(store.selectedBoxes.length);

    return (
      <span>
        {boxMap[boxCount].replace(
          "{{boxLength}}",
          store.selectedBoxes.length.toString()
        )}
      </span>
    );
  }
);
