"use client";
import React, { createContext, useContext, useState } from "react";

interface IFeaturesContext {
  activeFeature: number;
  handleChangeActiveFeature: (id?: number) => void;
}
const FeaturesContext = createContext<IFeaturesContext | undefined>(undefined);

export const useFeatures = () => {
  const context = useContext(FeaturesContext);
  if (!context) {
    throw new Error("useFeatures must be used within a FeaturesProvider");
  }
  return context;
};

export const FeaturesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeFeature, setActiveFeature] = useState(1);

  const handleChangeActiveFeature = (id?: number) => {
    setActiveFeature((prev) => id ?? prev + 1);
  };
  return (
    <FeaturesContext.Provider
      value={{ activeFeature, handleChangeActiveFeature }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};
