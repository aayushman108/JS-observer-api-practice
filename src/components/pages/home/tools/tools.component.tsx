"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TOOLS } from "@/constant/tools.constant";
import styles from "./tools.module.scss";

type TimeoutId = number;

export function Tools() {
  const intersectionObseverRef = useRef<IntersectionObserver | null>(null);
  const timeoutIdsRef = useRef<TimeoutId[]>([]);

  useEffect(() => {
    const liItem = document.querySelectorAll(
      `.${styles.tools_section__list__item}`
    );
    const options = {
      threshold: 0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        liItem.forEach((item, i) => {
          const timeoutId = window.setTimeout(() => {
            const targetElement = item as HTMLElement;
            targetElement.style.setProperty("--opacity", "0");
            targetElement.style.opacity = "1";
            targetElement.style.transform = `translate(0)`;
          }, 70 * i);

          timeoutIdsRef.current.push(timeoutId);
        });
      }
    };

    if (!intersectionObseverRef?.current) {
      intersectionObseverRef.current = new IntersectionObserver(
        callback,
        options
      );
    }
    const entry = document.querySelector(`.${styles.tools_section__list}`);

    if (entry) {
      intersectionObseverRef.current?.observe(entry);
    }

    return () => {
      if (intersectionObseverRef?.current && entry) {
        intersectionObseverRef.current?.unobserve(entry);
      }
      timeoutIdsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutIdsRef.current = [];
    };
  }, []);

  return (
    <section
      id="home_tools"
      aria-labelledby="home_tools__head"
      className={styles.tools_section}
    >
      <header className={styles.tools_section__header}>
        <h2
          id="home_tools__head"
          className={styles.tools_section__header__main}
        >
          Connect Calendly to the tools you already use
        </h2>
        <div className={styles.tools_section__header__sub}>
          <p>
            Boost productivity with more than 70 integrations that fold right
            into your workflow.
          </p>
          <Link href="/about">view all integrations</Link>
        </div>
      </header>
      <ul className={styles.tools_section__list}>
        {TOOLS.map((tool, i) => {
          return (
            <li key={i} className={styles.tools_section__list__item}>
              <figure>
                <Image src={tool.image} fill alt="" title="" />
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
