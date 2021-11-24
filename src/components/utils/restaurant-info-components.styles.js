import styled from "styled-components";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
  elevation: 5;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Open = styled(View)`
  flex-direction: row;
`;
export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;