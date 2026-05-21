import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resetHome, setResetHome] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
  };

  const handleHomeClick = () => {
    setResetHome((prev) => !prev);
  };

  return (
    <div>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onHomeClick={handleHomeClick}
      />
      <Home resetHome={resetHome} />
    </div>
  );
}

export default App;
