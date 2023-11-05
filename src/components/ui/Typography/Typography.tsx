import clsx from "clsx";
import styles from "./Typography.module.css";

import { FC, PropsWithChildren, ReactNode } from "react";

type IVariant = "normal" | "big" | "header";
interface IProps {
  className?: string;
  variant?: IVariant;
  Component?: React.ExoticComponent;
}
export const Typography: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  variant = "normal",
  Component = "span",
}) => {
  const _class = clsx(className, styles.typographyroot, {
    [styles.typography_normal]: variant === "normal",
    [styles.typography_big]: variant === "big",
    [styles.typography_header]: variant === "header",
  });

  return <Component className={_class}>{children}</Component>;
};
