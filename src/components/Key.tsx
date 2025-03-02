import React, { FC, PropsWithChildren } from "react";
import styles from "./Key.module.scss";

type KeyProps = PropsWithChildren<{}>;

export const Key: FC<KeyProps> = ({ children }) => {
  return <span className={styles.key}>{children}</span>;
};
