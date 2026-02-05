import styles from "../style/navbar.module.css";
import logo from "../assets/logo.jpg"; // path check kar lena

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Raven Logo" />
      </div>

      <button className={styles.menu}>MENU</button>
    </nav>
  );
}
