import React, { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type State = Todo[]

type Action = { type: 'add'; text: string } | { type: 'remove'; id: number } | { type: 'toggle'; id: number }

const initialState: State = []

// Implement the reducer function
function reducer(state: State, action: Action): State {
  // TODO: 1. Implement the reducer function
}

const Todo: React.FC = () => {
  // TODO: Use the useReducer hook
  const state = initialState
  const [text, setText] = useState('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      // TODO: Dispatch an action to add a new todo item
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
            {/* 
            TODO: Implement the remove and toggle functionality
             */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
