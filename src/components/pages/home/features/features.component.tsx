import React from "react";
import styles from "./features.module.scss";

export function Features() {
  return (
    <section
      id="home_features"
      aria-labelledby="home_features__head"
      className={styles.features_section}
    >
      <div className={styles.features}>
        <header className={styles.features__header}>
          <h1
            id="home_features__head"
            className={styles.features__header__main}
          >
            Calendly makes scheduling simple
          </h1>
          <div className={styles.features__header__sub}>
            <p>
              Calendly’s easy enough for individual users, and powerful enough
              to meet the needs of enterprise organizations — including 86% of
              the Fortune 500 companies.
            </p>
          </div>
          <button>Sign up for free</button>
        </header>
        <div></div>
      </div>
    </section>
  );
}
