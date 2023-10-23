import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);

  return { isSidebarOpened, setIsSidebarOpen };
};
