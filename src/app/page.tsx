import React from "react";
import {
  HomeComponentsContainer,
  Organization,
  Tools,
} from "@/components/pages";

export default function Home() {
  return (
    <main>
      <HomeComponentsContainer>
        <Tools />
        <Organization />
      </HomeComponentsContainer>
    </main>
  );
}
