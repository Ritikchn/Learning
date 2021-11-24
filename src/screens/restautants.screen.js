import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/utils/restautant-info-card.component";
import { StatusBar, SafeAreaView, Text, View, FlatList } from "react-native";

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
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestautantsScreen = () => {
  return (
    <SafeArea>
      <SearchBarBox>
        <Searchbar></Searchbar>
      </SearchBarBox>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
