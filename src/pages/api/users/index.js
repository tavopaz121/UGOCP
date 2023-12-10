import connectMongo from '@/db/conn'
import {
  getUsers,
  postUser,
  patchUser,
  deleteUser,
} from '@/controllers/user.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getUsers(req, res)
      break
    case 'POST':
      postUser(req, res)
      break
    case 'PATCH':
      patchUser(req, res)
      break
    case 'DELETE':
      deleteUser(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
