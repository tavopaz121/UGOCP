export const deleteUser = async (userId) => {
  try {
    const res = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
