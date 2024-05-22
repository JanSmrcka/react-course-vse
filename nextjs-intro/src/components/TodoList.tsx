import { Todo } from '@prisma/client'
import TodoItem from './TodoItem'

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
