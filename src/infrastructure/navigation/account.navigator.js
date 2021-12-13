import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Main"
        component={() => {
          return (
            <View>
              <Text>Account screen</Text>
            </View>
          );
        }}
      />
      <Stack.Screen
        name="Login"
        component={() => {
          return (
            <View>
              <Text>Login Screen</Text>
            </View>
          );
        }}
      />
    </Stack.Navigator>
  );
};
