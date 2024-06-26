import React from 'react'
import { Text, Reply } from '@botonic/react'

export const routes = [
  {
    path: 'initial',
    text: /hi/i,
    action: () => (
      <>
        <Text>Hello! Nice to meet you ;</Text>
        <Text>
          How can I help you?
          <Reply payload='search'>Search product</Reply>
          <Reply payload='track'>Track my order</Reply>
        </Text>
      </>
    ),
  },
]