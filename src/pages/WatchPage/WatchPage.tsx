import { useParams } from "react-router-dom";
import styles from "./WatchPage.module.scss";

export const WatchPage = () => {
  const { hentaiId } = useParams();

  return (
    <div className={styles.watchpage}>
      <div className={styles.hentaiinfo}>
        <img
          src="/src/assets/Jujutsu_Kaisen.jpg"
          alt="hentai poster"
          className={styles.poster}
        />
        <div className={styles.information}>
          <div className={styles.info}>
            <span>hentai name</span>
            <span>hentai author</span>
            <span>hentai release</span>
            <span>hentai tags1</span>
          </div>
          <div className={styles.tools}>
            <button>LIke</button>
            <button>Add to favorite</button>
          </div>
        </div>
      </div>
      <div className={styles.hentaidescription}>description</div>
      <span>watch:</span>
      <div className={styles.watchsection}>
        <span>select episode</span>
        <div className={styles.episodes}>
          <span>episode 1</span>
          <span>episode 2</span>
          <span>episode 3</span>
        </div>
        <div className={styles.player}></div>
      </div>
      <span>comments:</span>
      <div className={styles.commentssection}>
        <div className={styles.comment}>comment</div>
      </div>
    </div>
  );
};
