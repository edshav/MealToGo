import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { RestaurantsScreen } from "features/restaurants/screens/RestaurantsScreen";
import { theme } from "infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [oswaldFontsLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  const [latoFontsLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
