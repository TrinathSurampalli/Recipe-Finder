import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import fetchData from "../Utils/Api";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import Loader from "../Components/Loader/Loader";
import RecipeSection from "../Components/RecipeSection/RecipeSection";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home({ resetHome }) {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [exploreAll, setExploreAll] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setSearchQuery("");
    setRecipes([]);
  }, [resetHome]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const chicken = await fetchData("chicken");
      setChickenRecipes(chicken.slice(0, 5));
      const soup = await fetchData("soup");
      setSoupRecipes(soup.slice(0, 5));
      const all = await fetchData();
      setExploreAll(all);
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === "") return;
    setLoading(true);
    const results = await fetchData(query);
    setRecipes(results);
    setLoading(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setRecipes([]);
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (loading) return <Loader />;

  return (
    <div className={styles["home-container"]}>
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />

      {searchQuery ? (
        <div className={styles.section}>
          <h2>Search Results for "{searchQuery}"</h2>
          {recipes.length > 0 ? (
            <div className={styles["recipe-grid"]}>
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={setSelectedRecipe}
                />
              ))}
            </div>
          ) : (
            <p>No Recipes found for "{searchQuery}"</p>
          )}
        </div>
      ) : (
        <>
          <div className={styles.section}>
            <div className={styles.more}>
              <h2>Chicken Recipes</h2>
              <p onClick={() => handleSearch("chicken")}>more...</p>
            </div>

            <div className={styles["recipe-grid"]}>
              {chickenRecipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    selected={setSelectedRecipe}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.more}>
              <h2>Soup Recipes</h2>
              <p onClick={() => handleSearch("soup")}>more...</p>
            </div>

            <div className={styles["recipe-grid"]}>
              {soupRecipes.map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    selected={setSelectedRecipe}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.section}>
            <h2>Explore Recipes</h2>
            <div className={styles["recipe-grid"]}>
              {exploreAll.slice(0, visibleCount).map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    selected={setSelectedRecipe}
                  />
                );
              })}
            </div>
            {visibleCount < exploreAll.length && (
              <button id={styles.btn} onClick={showMore}>
                Show More
              </button>
            )}
          </div>
        </>
      )}

      {selectedRecipe && (
        <RecipeSection
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default Home;
