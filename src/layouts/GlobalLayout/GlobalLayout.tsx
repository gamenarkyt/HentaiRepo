import { Outlet } from "react-router-dom";
import styles from "./GlobalLayout.module.scss";
import { Header, Footer } from "../../components";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useGlobalStore } from "@/store/globalStore";

const GlobalLayout = () => {
  const isSidebarOpened = useGlobalStore((store) => store.isSidebarOpened);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar isOpened={isSidebarOpened} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { GlobalLayout };
