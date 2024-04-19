const Car = props => {
  return React.createElement('div', null, [
    React.createElement('h2', {}, props.brand),
    React.createElement('h3', {}, props.model),
    React.createElement('h3', {}, props.year),
  ])
}

const App = () => {
  return React.createElement('div', null, [
    React.createElement('h1', null, 'Velocity Vault'),
    React.createElement(Car, {
      brand: 'Ford',
      model: 'Mustang',
      year: 1964,
    }),
    React.createElement(Car, {
      brand: 'Ford',
      model: 'Fiesta',
      year: 2019,
    }),
    React.createElement(Car, {
      brand: 'Ford',
      model: 'Focus',
      year: 2018,
    })
  ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(React.createElement(App))
