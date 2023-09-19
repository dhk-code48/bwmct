import { IUser } from "./types";
import mongoose, { Model, Schema, model } from "mongoose";

const UserSchema = new Schema<IUser>(
  {
    role: String,
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true, id: true }
);

const UserModel: Model<IUser> =
  mongoose.models.User || model("User", UserSchema);

export default UserModel;
