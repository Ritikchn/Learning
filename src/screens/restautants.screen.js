import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/utils/restautant-info-card.component";
import { View, FlatList, TouchableOpacity } from "react-native";
import { RestaurantContext } from "../services/restautants/restaurant.context";
import { Search } from "../features/restaurants/components/search.component";
import { FavouriteContext } from "../services/favourites/favourites.context";
import { FavouriteBar } from "../components/favourites/favourites-bar.component";
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
export const RestautantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);

  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search
        isFavouriteToggle={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
