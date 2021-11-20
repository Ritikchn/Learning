import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some Recipe",
    icon,
    photos = [
      "https://www.thespruceeats.com/thmb/qV3rWToK2GI8HQE8Djo1rYzuPfA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
    ],
    address = " No Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <Card>
        <Card.Cover
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
    </>
  );
};
