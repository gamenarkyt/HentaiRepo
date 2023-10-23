import clsx from "clsx";
import { FC } from "react";
import styles from "./Sidebar.module.scss";
import { Typography } from "@/components/ui/Typography/Typography";
interface IProps {
  isOpened: boolean;
}
export const Sidebar: FC<IProps> = ({ isOpened }) => {
  const _class = clsx(styles.rootsidebar, {
    [styles.sidebar_closed]: isOpened === false,
    [styles.sidebar_opened]: isOpened === true,
  });
  return (
    <div className={_class}>
      <Typography>Popular</Typography>
      <Typography>Random</Typography>
      <Typography>About</Typography>
    </div>
  );
};
