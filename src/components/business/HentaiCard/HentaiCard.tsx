import { Typography } from "@/components/ui/Typography/Typography";
import styles from "./HentaiCard.module.scss";
import { FC } from "react";
import { IconFileLike, IconHeartFilled } from "@tabler/icons-react";
import clsx from "clsx";

interface IProps {
  className?: string;
  imageUrl: string;
  hentaiName: string;
  hentaiAuthor: string;
  likes: number;
}
export const HentaiCard: FC<IProps> = ({
  className,
  imageUrl,
  hentaiName,
  hentaiAuthor,
  likes,
}) => {
  const _class = clsx(className, styles.hentaicard);
  return (
    <div className={_class}>
      <img src={imageUrl} alt="hentai poster" className={styles.hentaiposter} />
      <div className={styles.hentaiinfo}>
        <Typography className={styles.hentainame}>{hentaiName}</Typography>
        <Typography className={styles.hentaiauthor}>{hentaiAuthor}</Typography>
      </div>
      <div className={styles.hentaistats}>
        <Typography className={styles.hentailikes}>
          <IconHeartFilled size={16} className={styles.likeicon} /> {likes}
        </Typography>
      </div>
    </div>
  );
};
