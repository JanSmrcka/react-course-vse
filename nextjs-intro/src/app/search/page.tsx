import TodoList from '@/components/TodoList'
import { getTodos } from '@/utils/actions'

const SearchPage = async ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { search?: string | null }
}) => {
  const todoName = searchParams.search
  const todos = await getTodos(todoName)

  return (
    <div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default SearchPage
