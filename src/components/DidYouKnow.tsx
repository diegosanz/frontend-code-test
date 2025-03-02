import React, { FC, useEffect } from "react";
import styles from "./DidYouKnow.module.scss";
import { Key } from "./Key";

const messages = [
  <>
    Use <Key>Shift</Key> + <Key>n</Key> for create a new box
  </>,
  <>
    Use <Key>Ctrl</Key> + <Key>click</Key> for select multiple boxes
  </>,
  <>
    Use <Key>Ctrl</Key> + <Key>z</Key> for undo
  </>,
  <>
    Use <Key>Ctrl</Key> + <Key>y</Key> for redo
  </>,
  <>
    Use <Key>Arrow keys</Key> for move boxes
  </>,
  <>
    Use <Key>Alt</Key> + <Key>arrow keys</Key> for move boxes faster!
  </>,
  <>
    Use <Key>Shift</Key> + <Key>arrow keys</Key> for move boxes even faster!!
  </>,
  <>
    Use <Key>Supr</Key> for remove selected boxes
  </>,
  <>
    Use <Key>Escape</Key> for unselect all boxes
  </>,
];

export const DidYouKnow: FC = () => {
  const [messageIndex, setMessageIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex) => (messageIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.didYouKnow}>
      <span role="img" aria-label="light bulb">
        💡
      </span>
      {messages[messageIndex]}
    </div>
  );
};
