import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { Typography } from "@/components/ui/Typography/Typography";
import { Input } from "@/components/ui/Input/Input";
import { Group } from "@/components/ui/Group/Group";
import { Button } from "@/components/ui/Button/Button";
import { CheckBox } from "@/components/ui/CheckBox/CheckBox";
import { TextField } from "@/components/ui/TextField/TextField";

export const LoginPage = () => {
  return (
    <div className={styles.loginpage}>
      <div className={styles.logincontainer}>
        <Typography className={styles.loginheader}>Login</Typography>
        <Group className={styles.group} variant="vertical">
          {/* <Typography variant="big">Name:</Typography> */}
          <TextField placeholder="Login" />
        </Group>
        <Group variant="vertical">
          {/* <Typography variant="big">Password:</Typography> */}
          <TextField placeholder="Password" />
        </Group>
        <div>
          <CheckBox label="I am aware that this site is for people over the age of 18" />
        </div>

        <Button className={styles.loginbutton}>Login</Button>
        <Link to="/register" className={styles.registerlink}>
          No account? Sign up!
        </Link>
      </div>
    </div>
  );
};
