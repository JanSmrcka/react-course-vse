export async function fetchBio(person: string): Promise<string> {
  const delay = person === 'Bob' ? 4000 : 200
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.')
    }, delay)
  })
}
