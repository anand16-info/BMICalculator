import React, { useState } from "react";
import BMICard from "./components/BMICard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-grad dark:bg-dark duration-500">
        
        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-4 py-2 rounded-full bg-btn text-btn shadow-md duration-300"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>

        <BMICard />
      </div>
    </div>
  );
}

export default App;
