import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import * as firebase from "firebase";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restautants/restaurant.context";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDhl4zrbBB63ilRR1klhpzLI4z_980Fuz8",
  authDomain: "mealstogo-fed1e.firebaseapp.com",
  projectId: "mealstogo-fed1e",
  storageBucket: "mealstogo-fed1e.appspot.com",
  messagingSenderId: "286938931065",
  appId: "1:286938931065:web:2b810f9a2f0f7a46c419a8",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
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
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
                <ExpoStatusBar style={"auto"} />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
