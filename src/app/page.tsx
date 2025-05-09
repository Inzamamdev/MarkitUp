"use-client";

import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} transition-colors duration-300`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
      </div>
    </div>
  );
}
