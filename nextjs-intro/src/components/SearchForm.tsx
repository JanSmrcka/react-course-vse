import { redirectSearchParams } from '@/utils/actions'

const SearchForm = () => {
  return (
    <div>
      <form action={redirectSearchParams}>
        <input type="text" name="search" placeholder="search" className="border border-gray-800 rounded-md p-2 mr-2" />
        <button type="submit" className="p-2 border border-gray-800 rounded-md hover:bg-slate-400">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
