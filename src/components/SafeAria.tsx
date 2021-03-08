import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeAria = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
