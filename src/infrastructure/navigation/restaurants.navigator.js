import React from "react";
import { RestautantDetailScreen } from "../../screens/restaurant-detail.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestautantsScreen } from "../../screens/restautants.screen";
const ResataurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <ResataurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <ResataurantStack.Screen
        name="Restaurants"
        component={RestautantsScreen}
      />
      <ResataurantStack.Screen
        name="RestaurantDetail"
        component={RestautantDetailScreen}
      />
    </ResataurantStack.Navigator>
  );
};
