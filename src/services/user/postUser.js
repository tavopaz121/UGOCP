export const createNewUser = async (newUser) => {
  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
