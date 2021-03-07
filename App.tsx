import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "features/restaurants/screens/RestaurantsScreen";
import { theme } from "infrastructure/theme";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
