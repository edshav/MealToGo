import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const StyledCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const StyledCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const SubSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
`;

export const Address = styled.Text`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
