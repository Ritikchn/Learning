import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
const SearchBarBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  const { keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyboard] = useState(keyword);
  return (
    <SearchBarBox>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          searchKeyword(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyboard(text);
        }}
      />
    </SearchBarBox>
  );
};
