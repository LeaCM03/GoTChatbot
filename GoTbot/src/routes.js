import React from 'react';
import { Text } from '@botonic/react';

export const routes = [
  {
    path: 'start',
    text: /^hi|hello|hey/i,
    action: () => <Text>Hi! Welcome to the Game of Thrones bot.</Text>,
  },
  {
    path: 'default',
    action: () => <Text>Sorry, I didn't understand that.</Text>,
  },
];