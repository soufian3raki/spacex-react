import React from 'react'
import ReactDOM from 'react-dom'
//! componentes de chakra
//* instalar chakra-ui
// npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
import { ChakraProvider } from '@chakra-ui/provider'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
