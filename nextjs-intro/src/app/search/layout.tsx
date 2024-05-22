import SearchForm from '@/components/SearchForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Search Todos</h1>
      </div>
      <div>
        <SearchForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
