"use client";
import React, { useEffect, useRef } from "react";

interface IProps {
  children: React.ReactNode;
}
export function HomeComponentsContainer(props: IProps) {
  const intersectionObseverRef = useRef<IntersectionObserver | null>(null);
  const intersectionObseverHeaderRef = useRef<IntersectionObserver | null>(
    null
  );
  const intersectionObseverHeaderSiblingRef =
    useRef<IntersectionObserver | null>(null);
  const timeoutIdsRef = useRef<number[]>([]);

  // Intersection Observer for Header
  useEffect(() => {
    const options = {
      threshold: 0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.style.maskImage = `none`;
          targetElement.style.opacity = "1";
          targetElement.style.transform = `translate(0)`;
        }
      });
    };

    if (!intersectionObseverHeaderRef?.current) {
      intersectionObseverHeaderRef.current = new IntersectionObserver(
        callback,
        options
      );
    }

    if (!intersectionObseverHeaderSiblingRef?.current) {
      intersectionObseverHeaderSiblingRef.current = new IntersectionObserver(
        callback,
        options
      );
    }

    const entriesHeader = document.querySelectorAll(`header`);
    const entriesHeaderSibling = document.querySelectorAll(`header ~ div`);

    if (entriesHeader.length) {
      entriesHeader.forEach((entry) => {
        intersectionObseverHeaderRef.current?.observe(entry);
      });
    }

    if (entriesHeaderSibling.length) {
      entriesHeaderSibling.forEach((entry) => {
        intersectionObseverHeaderSiblingRef.current?.observe(entry);
      });
    }

    const intersectionObseverHeaderSibling =
      intersectionObseverHeaderSiblingRef?.current;
    const intersectionObseverHeader = intersectionObseverHeaderRef?.current;

    return () => {
      if (intersectionObseverHeaderSibling && entriesHeaderSibling.length) {
        entriesHeaderSibling.forEach((entry) => {
          intersectionObseverHeaderSibling?.unobserve(entry);
        });
      }
      if (intersectionObseverHeader && entriesHeader.length) {
        entriesHeader.forEach((entry) => {
          intersectionObseverHeader?.unobserve(entry);
        });
      }
      timeoutIdsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutIdsRef.current = [];
    };
  }, []);

  // Intersection Observer for List
  useEffect(() => {
    const options = {
      threshold: 0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const liItem = Array.from(entry.target.children);
          liItem.forEach((item, i) => {
            const timeoutId = window.setTimeout(() => {
              const targetElement = item as HTMLElement;
              // targetElement.style.setProperty("--opacity", "0");
              targetElement.style.maskImage = `none`;
              targetElement.style.opacity = "1";
              targetElement.style.transform = `translate(0)`;
            }, 40 * i);

            timeoutIdsRef.current.push(timeoutId);
          });
        }
      });
    };

    if (!intersectionObseverRef?.current) {
      intersectionObseverRef.current = new IntersectionObserver(
        callback,
        options
      );
    }

    const entries = document.querySelectorAll(`ul`);

    if (entries.length) {
      entries.forEach((entry) => {
        intersectionObseverRef.current?.observe(entry);
      });
    }

    return () => {
      if (intersectionObseverRef?.current && entries.length) {
        entries.forEach((entry) => {
          intersectionObseverRef.current?.unobserve(entry);
        });
      }
      timeoutIdsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutIdsRef.current = [];
    };
  }, []);

  return (
    <div style={{ maxWidth: "100vw", width: "100%" }}>{props.children}</div>
  );
}
