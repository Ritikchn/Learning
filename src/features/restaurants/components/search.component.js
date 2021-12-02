import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
const SearchBarBox = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyboard] = useState(keyword);
  // useEffect(() => {
  //   search(searchKeyword);
  // }, []);
  return (
    <SearchBarBox>
      <Searchbar
        placeholder="Search for location"
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
