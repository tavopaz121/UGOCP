export const getUsers = async () => {
  try {
    const res = await fetch('/api/users')

    if (!res.ok) {
      throw new Error('Something went wrong with the request')
    }

    const users = res.json()

    return users
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
