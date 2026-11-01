
import React from "react";
import { AuthProvider } from "@site/src/context/AuthContext";
import { LearningProvider } from "@site/src/context/LearningContext";

export default function Root({
  children
}) {
  return (
    <AuthProvider>
      <LearningProvider>
        {children}
      </LearningProvider>
    </AuthProvider>
  );
}
