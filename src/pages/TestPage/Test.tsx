import { IconSearch } from "@tabler/icons-react";
import { Button } from "../../components/ui/Button/Button";
import { Divider } from "../../components/ui/Divider/Divider";
import { Input } from "../../components/ui/Input/Input";
import { Typography } from "../../components/ui/Typography/Typography";
import styles from "./Test.module.scss";

export const TestPage = () => {
  return (
    <div className={styles.testpage}>
      <div className={styles.group_vertical}>
        <Typography variant="header">Typography header</Typography>
        <Typography variant="big">Typography big</Typography>
        <Typography variant="normal">Typography normal</Typography>
      </div>
      <Divider />
      <Typography variant="header">Button:</Typography>
      <div className={styles.group}>
        <Button variant="normal">Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      <Divider />
      <Typography>Input (text field)</Typography>
      <div className={styles.group}>
        <Input
          leftComponents={<IconSearch />}
          rightComponents={<div onClick={() => alert(2)}>right</div>}
        />
      </div>
    </div>
  );
};
