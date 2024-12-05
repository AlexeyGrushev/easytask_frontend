import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

// Хук для проверки мобильной/планшетной версии
export const useIsTabletOrMobile = () => {
  return useMediaQuery({ query: "(max-width: 900px)" });
};

export const MainPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile(); // Проверяем, мобильная ли версия
  const [layout, setLayout] = useState("desktopL"); // Изначально "desktopL"

  // Обновляем класс обертки в зависимости от размера экрана
  useEffect(() => {
    setLayout(isTabletOrMobile ? "mobileL" : "desktopL");
  }, [isTabletOrMobile]);

  return (
    <div className={layout}>
      {isTabletOrMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};
