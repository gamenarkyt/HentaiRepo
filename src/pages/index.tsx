import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout";
import { MainPage } from "@/pages/MainPage/MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* ... etc. */}
    </Route>
  )
);
