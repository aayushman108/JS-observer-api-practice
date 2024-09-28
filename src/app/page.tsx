import React from "react";
import {
  Features,
  HomeComponentsContainer,
  Organization,
  Tools,
} from "@/components/pages";
import { FeaturesProvider } from "@/components/pages/home/features/featuresProvider/featuresProvider.component";

export default function Home() {
  return (
    <main style={{ maxWidth: "100vw", width: "100%" }}>
      <HomeComponentsContainer>
        <FeaturesProvider>
          <Features />
        </FeaturesProvider>
        <Tools />
        <Organization />
      </HomeComponentsContainer>
    </main>
  );
}
