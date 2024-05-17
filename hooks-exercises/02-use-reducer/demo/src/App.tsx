import { useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reducer(state: number, action: { type: 'increment' | 'decrement' }) {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  console.log('App render', count)

  useEffect(() => {
    console.log('App useEffect', count)
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`Count is ${count}`}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
