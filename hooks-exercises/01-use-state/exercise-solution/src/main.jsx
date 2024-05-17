import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

let states = []
let calls = -1

export function useState(initialValue) {
  const callId = ++calls

  if (states[callId]) {
    return states[callId]
  }
  const setValue = newValue => {
    states[callId][0] = newValue
    render()
  }
  const tuple = [initialValue, setValue]
  states[callId] = tuple
  return tuple
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Use state behind scenes</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

const container = document.getElementById('root')

const root = createRoot(container)

export const render = () => {
  calls = -1
  root.render(<App />)
}

render()
