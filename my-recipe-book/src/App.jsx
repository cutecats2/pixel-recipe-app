import { useState } from "react";
import Header from "./components/header";
import Recipe1 from "./components/recipe1";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("menu");

  return (
    <div className="window">
      <div className="game-frame">
        {currentScreen === "menu" && (
          <Header onSelectRecipe={() => setCurrentScreen("recipe1")} />
        )}

        {currentScreen === "recipe1" && (
          <Recipe1 onBack={() => setCurrentScreen("menu")} />
        )}
      </div>
    </div>
  );
}

export default App;

