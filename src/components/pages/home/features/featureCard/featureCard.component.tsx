import React, { useEffect, useRef, useState } from "react";
import { Progressbar } from "@/components/progressbar/progressbar.component";
import { FEATURES } from "@/constant/features.constant";
import { useFeatures } from "../featuresProvider/featuresProvider.component";
import styles from "./featureCard.module.scss";

interface IProps {
  card: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
}
export function FeatureCard(props: IProps) {
  const { activeFeature, handleChangeActiveFeature } = useFeatures();
  const [contentHeight, setContentHeight] = useState(0);
  const [activeClick, setActiveClick] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const divHeight = contentRef.current.scrollHeight;
      if (activeFeature === props.card.id) {
        setContentHeight(divHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [activeFeature, props.card.id]);

  const buttonStyles =
    activeFeature === props.card.id
      ? { fontSize: "2rem", fontWeight: "700" }
      : { fontSize: "1.5rem", fontWeight: "600" };

  return (
    <article className={styles.feature_card}>
      <button
        onClick={() => {
          handleChangeActiveFeature(props.card.id);
          setActiveClick(props.card.id);
        }}
        style={buttonStyles}
        className={`${styles.feature_card__btn} ${
          activeFeature === props.card.id ? styles.active : null
        }`}
      >
        {props.card.title}
      </button>
      <div
        className={`${styles.feature_card__content} ${
          activeFeature === props.card.id && styles.active
        }`}
        style={{
          height: contentHeight,
          overflowY: "hidden",
        }}
      >
        <div
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: props.card.content }}
          className={styles.feature_card__content__div}
        />
      </div>
      {activeFeature === props.card.id && (
        <Progressbar
          active={activeClick}
          lastCard={props.card.id === FEATURES.length}
        />
      )}
    </article>
  );
}
