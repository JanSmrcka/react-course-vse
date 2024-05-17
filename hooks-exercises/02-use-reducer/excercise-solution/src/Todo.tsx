import React, { useReducer, useState } from 'react'

// Step 3: Define types for state and actions
interface Todo {
  id: number
  text: string
  completed: boolean
}

type State = Todo[]

type Action = { type: 'add'; text: string } | { type: 'remove'; id: number } | { type: 'toggle'; id: number }

// Define the initial state
const initialState: State = []

// Implement the reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }]
    case 'remove':
      return state.filter(todo => todo.id !== action.id)
    case 'toggle':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo))
    default:
      throw new Error('Unknown action type')
  }
}

// Step 4: Create the Todo component
const Todo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch({ type: 'add', text })
      setText('')
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAdd}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'toggle', id: todo.id })}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
