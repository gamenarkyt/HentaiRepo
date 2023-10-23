import { FC } from "react";
import styles from "./CheckBox.module.css";
import { IconCheck } from "@tabler/icons-react";
// import CheckIcon from "./assets/check.svg?react";

interface IProps {
  label?: string;
}

export const CheckBox: FC<IProps> = ({ label }) => {
  return (
    <label className={styles.rootcheckbox}>
      <input className={styles.realcheckbox} type="checkbox" />
      <div className={styles.yuicheckbox}>
        <IconCheck size={16} />
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
