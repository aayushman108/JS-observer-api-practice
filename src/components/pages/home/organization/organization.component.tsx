import React from "react";
import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { TOOLS } from "@/constant/tools.constant";
import styles from "./_organization.module.scss";

export function Organization() {
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
