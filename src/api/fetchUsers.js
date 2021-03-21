const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  const normalizedUsers = users.reduce((userMap, user) => {
    return {
      ...userMap,
      [user.id]: user
    }
  }, {})
  return normalizedUsers
}

export default fetchUsers
