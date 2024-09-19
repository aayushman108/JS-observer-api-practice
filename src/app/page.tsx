import React from "react";
import {
  Features,
  HomeComponentsContainer,
  Organization,
  Tools,
} from "@/components/pages";

export default function Home() {
  return (
    <main style={{ maxWidth: "100vw", width: "100%" }}>
      <HomeComponentsContainer>
        <Features />
        <Tools />
        <Organization />
      </HomeComponentsContainer>
    </main>
  );
}
