import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/utils/restautant-info-card.component";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

const SearchBarBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantInfoCardBox = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
export const RestautantsScreen = () => {
  return (
    <SafeArea>
      <SearchBarBox>
        <Searchbar></Searchbar>
      </SearchBarBox>
      <RestaurantInfoCardBox>
        <RestaurantInfoCard />
      </RestaurantInfoCardBox>
    </SafeArea>
  );
};
