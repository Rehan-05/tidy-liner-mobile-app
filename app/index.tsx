import { Redirect } from "expo-router";
import { useState } from "react";
import { LogBox } from "react-native";

export default function Index() {
  const [isAuthenticated] = useState(false);

  LogBox.ignoreLogs([
    "Support for defaultProps will be removed from function components",
  ]);

  return isAuthenticated ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/screens/type-selection/type-selection" />
  );
}
