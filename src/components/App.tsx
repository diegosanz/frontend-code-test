import React from "react";

import { observer } from "mobx-react";
import store from "../stores/MainStore";
import Canvas from "./Canvas";
import { DidYouKnow } from "./DidYouKnow";
import Toolbar from "./Toolbar";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Canvas store={store} />
      <DidYouKnow />
    </div>
  );
}

export default observer(App);
