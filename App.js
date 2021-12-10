import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restautants/restaurant.context";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latodLoaded) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
              <ExpoStatusBar style={"auto"} />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      </ThemeProvider>
    </>
  );
}
