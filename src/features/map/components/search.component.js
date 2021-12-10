import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
const SearchBarBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 10px;
  width: 100%;
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyboard] = useState(keyword);
  useEffect(() => {
    setSearchKeyboard(keyword);
  }, [keyword]);
  return (
    <SearchBarBox>
      <Searchbar
        placeholder="Search for location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyboard(text);
        }}
      />
    </SearchBarBox>
  );
};
