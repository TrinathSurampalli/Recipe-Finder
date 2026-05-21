import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe, selected }) => {
  return (
    <div className={styles["recipe-card"]} onClick={() => selected(recipe)}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.idMeal + " " + recipe.strMeal}
      />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
    </div>
  );
};

export default RecipeCard;
