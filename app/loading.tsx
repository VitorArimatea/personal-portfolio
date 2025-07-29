"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen flex justify-center items-center">
      <RingLoader
        color={theme === "dark" ? "#8BC0FF" : "#1B4BC6"}
        size={150}
        aria-label="Tela de carregamento"
        data-testid="loader"
      />
    </div>
  );
};
export default Loading;
