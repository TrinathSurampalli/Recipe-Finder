import styles from "./Navbar.module.css";

const Navbar = ({ toggleDarkMode, darkMode, onHomeClick }) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo} onClick={onHomeClick}>
        Recipe Finder
      </h1>
      <button className={styles["mode-btn"]} onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
