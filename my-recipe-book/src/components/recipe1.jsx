import recipeCard from "../assets/Recipe.png";

function Recipe1({ onBack }) {
  return (
    <div className="recipe-screen">
      <img
        src={recipeCard}
        alt="Recipe Card"
        className="recipe-card-img"
      />

      <button className="pixel-button back-button" onClick={onBack}>
        X
      </button>
    </div>
  );
}

export default Recipe1;


