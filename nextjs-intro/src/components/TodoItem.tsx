'use client'
import { deleteTodo, toggleTodo } from '@/utils/actions'
import { Todo } from '@prisma/client'
import { useTransition } from 'react'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [, startTransition] = useTransition()
  return (
    <div className="grid grid-cols-6">
      <div className={`text-xl mr-4 ${todo.done ? 'line-through' : ''}`}>{todo.title}</div>
      <div>
        <button
          className="p-2 border border-gray-800 rounded-md hover:bg-slate-400 mr-2"
          onClick={() => startTransition(() => toggleTodo(todo.id))}
        >
          complete
        </button>
        <button
          className="p-2 border border-gray-800 rounded-md hover:bg-slate-400"
          onClick={() => startTransition(() => deleteTodo(todo.id))}
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
