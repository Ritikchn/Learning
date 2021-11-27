import React, { useContext } from "react";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/utils/restautant-info-card.component";
import { View, FlatList } from "react-native";
import { SafeArea } from "../components/utility/safe-area.componeent";
import { RestaurantContext } from "../services/restautants/restaurant.context";
const SearchBarBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestautantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <SearchBarBox>
        <Searchbar></Searchbar>
      </SearchBarBox>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
