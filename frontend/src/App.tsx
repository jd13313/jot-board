//import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Login from './components/Login.component'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Login></Login>
    </ChakraProvider>
  )
}

export default App
