import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {setCount(count + 1)}
  

  const compteur = 0

 

  return (
    <>
      <h1>toto</h1>
      
      
      <button onClick={handleClick}>Push me ! {count}</button>
      <Alert message={'Alert'} type={'warning'} />
    </>
  )
}

export default App
