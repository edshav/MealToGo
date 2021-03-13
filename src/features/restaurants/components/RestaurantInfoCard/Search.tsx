import * as React from "react";

import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "services/location/location.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Search: React.FC = () => {
  const { keyword, onSearch } = React.useContext(LocationContext);
  const [term, setTerm] = React.useState(keyword);
  const onChange = (text: string) => {
    setTerm(text);
  };

  const onSubmitEditing = () => {
    onSearch(term);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={term}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
      />
    </SearchContainer>
  );
};
