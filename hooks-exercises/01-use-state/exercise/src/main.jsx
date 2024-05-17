import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

export function useState(initialValue) {}

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

root.render(<App />)
