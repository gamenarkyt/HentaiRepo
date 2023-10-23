import { FC } from "react";
import styles from "./TextField.module.css";
import { Divider } from "@/components/ui/Divider/Divider";

interface IProps {
  placeholder?: string;
}
export const TextField: FC<IProps> = ({ placeholder }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} className={styles.input} />
      <div className={styles.divider} />
    </div>
  );
};
