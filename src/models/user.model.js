import mongoose from 'mongoose'

let User

try {
  User = mongoose.model('User')
} catch (error) {
  const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    curp: String,
    ine: String,
    localidad: String,
    proyecto: String,
  })

  User = mongoose.model('User', UserSchema)
}

export default User
