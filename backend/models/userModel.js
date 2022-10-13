import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    /* this is to add two more fiels, created time and updated time */
    timestamps: true,
  }
);

/* el model pide 2 parametros, 1 el nombre, 2 el esquema */
const User = mongoose.model('User', productSchema);
export default User;
