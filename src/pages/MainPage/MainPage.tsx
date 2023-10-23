import { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import axios from "axios";
import { Typography } from "@/components/ui/Typography/Typography";
import { HentaiCard } from "@/components/business/HentaiCard/HentaiCard";

interface IPost {
  id: number;
  title: string;
  likes: number;
}

const MainPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<IPost[]>("http://localhost:4444/posts");

      setPosts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainpage}>
      {!posts.length && <span>Posts loading...</span>}
      <Typography variant="header">Недавно обновлённые</Typography>
      <div className={styles.posts}>
        {posts.map((hentai) => {
          return (
            <HentaiCard
              imageUrl="/src/assets/Jujutsu_Kaisen.jpg"
              hentaiName={hentai.title}
              hentaiAuthor={hentai.title}
              likes={hentai.likes}
              className={styles.hentaicard}
            />
          );
        })}
      </div>
    </div>
  );
};

export { MainPage };
