import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./ToolbarButton.module.scss";
type ToolbarButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const ToolbarButton: FC<ToolbarButtonProps> = ({
  className,
  ...rest
}) => {
  return <button className={clsx(styles.toolbarButton, className)} {...rest} />;
};
