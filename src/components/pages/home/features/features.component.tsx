"use client";
import React, { FormEvent } from "react";
import { Button } from "@/components/Button/button.component";
import { FEATURES } from "@/constant/features.constant";
import { FeatureCard } from "./featureCard/featureCard.component";
import styles from "./features.module.scss";
import { useFeatures } from "./featuresProvider/featuresProvider.component";

export function Features() {
  const { handleChangeActiveFeature } = useFeatures();

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
  };
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
          <form onSubmit={handleClick}>
            <Button type="submit" className="primary" text="Sign up for free" />
          </form>
        </header>
        <div className={styles.features__content}>
          <ul className={styles.features__content__list}>
            {FEATURES.map((feature, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    handleChangeActiveFeature(i + 1);
                  }}
                >
                  <FeatureCard card={feature} />
                </li>
              );
            })}
          </ul>
          <div className={styles.features__content__image}>
            <figure></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
