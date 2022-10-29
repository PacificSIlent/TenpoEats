import { HeaderBackButton } from '@react-navigation/elements';
import { colorGreen } from 'assets/colors';
import { fontM } from 'assets/tokens';
import React from 'react';
import styled from 'styled-components';

const CustomBackButton = styled(HeaderBackButton)`
  margin-left: 0;
  margin-right: 0;
  justify-content: flex-start;
`;

const BackButton = ({ navigationFunction }: { navigationFunction: () => void }) => {
  return (
    <CustomBackButton
      labelVisible={false}
      labelStyle={{ fontSize: fontM }}
      pressColor={colorGreen}
      tintColor={colorGreen}
      onPress={() => {
        navigationFunction();
      }}
    />
  );
};

export default BackButton;
