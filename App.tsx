import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { AuthContext } from "./src/contexts/AuthContext";

import SignIn from "./src/screens/SignIn";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />

        <AuthContext.Provider value={[]}>
          <SignIn />
        </AuthContext.Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
