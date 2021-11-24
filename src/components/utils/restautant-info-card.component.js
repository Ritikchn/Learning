import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../spacer/spacer.component";
import { Text as Text2 } from "../typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Section,
  SectionEnd,
  Rating,
  Open,
} from "./restaurant-info-components.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some Recipe",
    icon = "https://static.vecteezy.com/system/resources/thumbnails/000/581/865/small/icon0-vector-633-01.jpg",
    photos = [
      "https://www.thespruceeats.com/thmb/qV3rWToK2GI8HQE8Djo1rYzuPfA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
    ],
    address = " No Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <Info>
            <Text2 variant="label">{name}</Text2>
            <Section>
              <Rating>
                {ratingArray.map(() => (
                  <SvgXml xml={star} width={20} height={20} />
                ))}
              </Rating>
              <SectionEnd>
                {isClosedTemporarily && (
                  <Text2 variant="error">CLOSED TEMPORARILY</Text2>
                )}
                <Spacer variant="left.medium" />
                {isOpenNow && (
                  <Open>
                    <SvgXml xml={open} width={20} height={20} />
                  </Open>
                )}

                <Spacer variant="left.medium" />
                <Icon source={{ uri: icon }} />
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};
