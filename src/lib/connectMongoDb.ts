import mongoose from "mongoose";

const connectMongoDb = async () => {
  if (mongoose.connections[0] !== null) {
    try {
      await mongoose.connect(process.env.NEXT_API || "");
      console.log("CONNECTED");
    } catch {
      console.log("ERROR WHILE CONNECTING TO MONGODB");
    }
  }
};

export default connectMongoDb;
