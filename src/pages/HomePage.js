import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import background from "../images/background.jpg";

const HomePage = (props) => {
  return (
    <div className={styles.container}>
      <main>
        <section
          style={{ backgroundImage: `url(${background})` }}
          className={styles.s1}
        >
          <h1 className={styles.s1Title}>Iphone 13 PRO</h1>
          <p className={styles.s1Subtitle}>
            Now available for preorder,don't miss this opportunity...
          </p>
          <Link className={styles.s1Link} to="/shopping-cart/catalog">
            Shop now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
