import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { useContext, useState } from "react";
import { ThemeToggleProvider, ThemeTogleContext } from "./contexts/ThemeToggle";

export function App() {
  return (
    <ThemeToggleProvider>
      <AppContent />
    </ThemeToggleProvider>
  );
}

export function AppContent() {
  const { theme } = useContext(ThemeTogleContext);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
