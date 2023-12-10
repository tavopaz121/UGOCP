import Users from '@/models/user.model'

// get : api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find()

    if (!users) return res.status(404).json({ error: 'Datos no encontrados' })
    res.status(200).json(users)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// get : api/user/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query

    if (userId) {
      const user = await Users.findById(userId)
      if (user) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }
    } else {
      return res.status(404).json({ error: 'ID de usuario no proporcionado' })
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// post : api/user
export async function postUser(req, res) {
  try {
    const formData = req.body

    if (!formData) return res.status(404).json({ error: 'Datos no completos' })
    const newUser = await Users.create(formData)
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(404).json({ error })
  }
}

// patch : api/user/1
export async function patchUser(req, res) {
  try {
    const { userId } = req.query
    const formData = req.body

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData, {
        new: true,
      })
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' })
        return
      }
      res.status(200).json(user)
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// delete : api/user/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query

    if (!userId) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    let user
    try {
      user = await Users.findByIdAndDelete(userId)
    } catch (error) {
      return res.status(404).json({ error: 'ID invalido' })
    }

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    res.status(200).json(`Usuario con id ${userId} eliminado`)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
