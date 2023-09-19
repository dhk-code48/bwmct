import { Document } from "mongoose";

export interface IUser extends Document {
  role: string;
  name: string;
  email: string;
  password: string;
}
