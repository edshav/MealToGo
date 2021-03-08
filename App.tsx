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
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "features/restaurants/screens/RestaurantsScreen";
import { theme } from "infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { SafeAria } from "components/SafeAria";

enum TabScreenName {
  Restaurants = "Restaurants",
  Map = "Map",
  Settings = "Settings",
}

const Settings = () => (
  <SafeAria>
    <Text>Settings</Text>
  </SafeAria>
);
const Map = () => (
  <SafeAria>
    <Text>Map</Text>
  </SafeAria>
);

const Tab = createBottomTabNavigator();

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

  const variantIcon: Record<TabScreenName, Record<typeof Platform.OS, any>> = {
    [TabScreenName.Restaurants]: {
      ios: "ios-restaurant-outline",
      android: "md-restaurant-outline",
      macos: "ios-restaurant-outline",
      web: "ios-restaurant-outline",
      windows: "ios-restaurant-outline",
    },
    [TabScreenName.Map]: {
      ios: "ios-map-outline",
      android: "md-map-outline",
      macos: "ios-map-outline",
      web: "ios-map-outline",
      windows: "ios-map-outline",
    },
    [TabScreenName.Settings]: {
      ios: "ios-settings-outline",
      android: "md-settings-outline",
      macos: "ios-settings-outline",
      web: "ios-settings-outline",
      windows: "ios-settings-outline",
    },
  };

  const createScreenOptions: (props: {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: any;
  }) => BottomTabNavigationOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const iconname = variantIcon[route.name as TabScreenName][Platform.OS];

      return <Ionicons name={iconname} size={size} color={color} />;
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={props => createScreenOptions(props)}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              name={TabScreenName.Restaurants}
              component={RestaurantsScreen}
            />
            <Tab.Screen name={TabScreenName.Map} component={Map} />
            <Tab.Screen name={TabScreenName.Settings} component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
