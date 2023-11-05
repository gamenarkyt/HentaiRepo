import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout";
import { MainPage } from "@/pages/MainPage/MainPage";
import { WatchPage } from "@/pages/WatchPage/WatchPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/watch">
        <Route path="" element={<Navigate to="/" />} />
        <Route path=":hentaiId" element={<WatchPage />} />
      </Route>
      {/* ... etc. */}
    </Route>
  )
);
