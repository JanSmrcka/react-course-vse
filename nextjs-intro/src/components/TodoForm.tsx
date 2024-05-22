import { createTodo } from '@/utils/actions'
import { cookies } from 'next/headers'

const TodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input type="text" name="todo" className="border border-gray-800 rounded-md p-2 mr-2" />
        <button type="submit" className="p-2 border border-gray-800 rounded-md hover:bg-slate-400">
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
