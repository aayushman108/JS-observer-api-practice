"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { TOOLS } from "@/constant/tools.constant";
import styles from "./_organization.module.scss";

export function Organization() {
  const intersectionObseverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
        }
      });
    };

    if (!intersectionObseverRef?.current) {
      intersectionObseverRef.current = new IntersectionObserver(
        callback,
        options
      );
    }
    const entries = document.querySelectorAll(
      `.${styles.organization_list__item}`
    );

    if (intersectionObseverRef?.current && entries.length) {
      entries.forEach((entry) =>
        intersectionObseverRef.current?.observe(entry)
      );
    }

    return () => {
      if (intersectionObseverRef?.current && entries.length) {
        entries.forEach((entry) =>
          intersectionObseverRef.current?.unobserve(entry)
        );
      }
    };
  }, []);

  return (
    <section id="home_organization" className={styles.organization_section}>
      <ul className={styles.organization_list}>
        {TOOLS.map((tool, i, arr) => {
          const length = arr.length;
          return (
            <li
              key={i}
              className={styles.organization_list__item}
              style={{
                animationDelay: `${
                  (30 / length) * (length - i - 1) * -1 + 0.5
                }s`,
              }}
            >
              <figure>
                <Image src={tool.image} alt="" fill />
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
