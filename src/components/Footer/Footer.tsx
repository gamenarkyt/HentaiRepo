import { Typography } from "@/components/ui/Typography/Typography";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Typography variant="big">HentaiRepo</Typography>
      <Typography>Hosted by Vercel</Typography>
    </div>
  );
};
