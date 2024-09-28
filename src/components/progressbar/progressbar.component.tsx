"use client";
import React, { useEffect, useState } from "react";
import { useFeatures } from "../pages/home/features/featuresProvider/featuresProvider.component";
import styles from "./progressbar.module.scss";

export function Progressbar({ active }: { active: number | null }) {
  const [progress, setProgress] = useState(0);
  const { activeFeature, handleChangeActiveFeature } = useFeatures();

  useEffect(() => {
    if (active === activeFeature) {
      setProgress(100);
      return;
    }
    setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 50);
    if (progress === 100) {
      handleChangeActiveFeature(activeFeature + 1);
    }
  }, [active, activeFeature, handleChangeActiveFeature, progress]);

  return (
    <div className={styles.progressbar}>
      <div
        className={styles.progressbar__progress}
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
}
