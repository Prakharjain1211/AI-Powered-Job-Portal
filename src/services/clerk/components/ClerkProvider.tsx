// Created custom clerkProvider adding the funcationality of toggle theme

"use client"

import { ClerkProvider as OrigianlClerkProvider } from "@clerk/nextjs";
import { ReactNode, Suspense } from "react";
import { dark } from "@clerk/themes";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";
export function ClerkProvider({ children }: { children: ReactNode }) {
  const isDarkMode = useIsDarkMode();
  return (
    <Suspense>
      <OrigianlClerkProvider
        appearance={isDarkMode ? { baseTheme: [dark] } : undefined}
      >
        {children}
      </OrigianlClerkProvider>
    </Suspense>
  );
}
