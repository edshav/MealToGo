import * as React from "react";
import styled from "styled-components/native";
import { theme } from "infrastructure/theme";
import { ActivityIndicator } from "react-native-paper";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.Text`
  color: ${props => props.theme.colors.text.error};
  font-size: ${props => props.theme.fontSizes.h4};
`;

type Props = {
  loading: boolean;
  error: string | undefined;
};

export const SpinnerAndError: React.FC<Props> = ({
  loading,
  error,
  children,
}) => {
  const content = error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <ActivityIndicator
      animating={true}
      size="large"
      color={theme.colors.brand.primary}
    />
  );
  return loading ? <Container>{content}</Container> : <>{children}</>;
};
