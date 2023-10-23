import { Typography } from "@/components/ui/Typography/Typography";
import styles from "./Header.module.scss";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/Input/Input";
import { useSidebar } from "@/hooks/useSidebar";
import { useGlobalStore } from "@/store/globalStore";
import { Link } from "react-router-dom";

export const Header = () => {
  const setIsSidebarOpened = useGlobalStore(
    (state) => state.setIsSidebarOpened
  );
  const onSearchClickHandler = () => {
    const searchinput = document.getElementsByName(
      "searchquery"
    )[0] as HTMLInputElement;
    const value = searchinput.value;
    alert("Searching " + value);
  };

  const onBurgerMenuClickHandler = () => {
    setIsSidebarOpened((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <IconMenu2 size={36} onClick={onBurgerMenuClickHandler} />
        <Typography variant="big" className={styles.sitename}>
          HentaiRepo
        </Typography>
      </div>
      <div className={styles.center}>
        <Input
          name="searchquery"
          placeholder="Hentai name"
          rightComponents={
            <IconSearch size={20} onClick={onSearchClickHandler} />
          }
        />
      </div>

      <div className={styles.right}>
        <Link to="/login">Login</Link>
        {/* <Link to="/register">Register</Link> */}
      </div>
    </div>
  );
};
