import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TOOLS } from "@/constant/tools.constant";
import styles from "./tools.module.scss";

export function Tools() {
  return (
    <section
      id="home_tools"
      aria-labelledby="home_tools__head"
      className={styles.tools_section}
    >
      <div className={styles.tools}>
        <header className={styles.tools__header}>
          <h2 id="home_tools__head" className={styles.tools__header__main}>
            Connect Calendly to the tools you already use
          </h2>
          <div className={styles.tools__header__sub}>
            <p>
              Boost productivity with more than 70 integrations that fold right
              into your workflow.
            </p>
            <Link href="/about">View all integrations</Link>
          </div>
        </header>
        <ul className={styles.tools__list}>
          {TOOLS.map((tool, i) => {
            return (
              <li key={i} className={styles.tools__list__item}>
                <figure>
                  <Image src={tool.image} fill alt="" title="" />
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
