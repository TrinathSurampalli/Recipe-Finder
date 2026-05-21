import styles from "./RecipeSection.module.css";

const RecipeSection = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`.trim());
    }
  }

  const steps = recipe.strInstructions
    ? recipe.strInstructions
        .split(/[.\n]/)
        .map((step) => step.trim())
        .filter((step) => step.length > 6)
    : [];

  return (
    <div className={styles["recipe-container"]} onClick={onClose}>
      <div
        className={styles["recipe-display"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.btn} onClick={onClose}>
          x
        </button>
        <div className={styles["recipe-display-body"]}>
          <div className={styles["recipe-display-image"]}>
            <img src={recipe.strMealThumb} />
          </div>
          <div className={styles["recipe-display-details"]}>
            <h2>{recipe.strMeal}</h2>
            <p>
              <strong>Category: {recipe.strCategory} </strong>
            </p>
            <p>
              <strong>Area: {recipe.strArea} </strong>
            </p>
            {ingredients.length > 0 && (
              <div className={styles["ingredients-section"]}>
                <h3>Ingredients:</h3>
                <ul>
                  {ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            )}
            {steps.length > 0 && (
              <div className={styles.instructions}>
                <h3>Process:</h3>
                <ol>
                  {steps.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
            )}
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                className={styles["youtube-btn"]}
                target="_blank"
              >
                Watch on Youtube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
