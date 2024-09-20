import React from "react";
import { Button } from "@/components/Button/button.component";
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
          <Button style={{ border: "2px solid red" }}>Sign up for free</Button>
        </header>
        <div></div>
      </div>
    </section>
  );
}
