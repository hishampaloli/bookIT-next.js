import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_LOCAL_URI!, {
      // @ts-ignore
      useNewUrlParser: true,
    })
    .then((con) => {
      console.log("DB CONNECTED SUCCESSFULLY");
    });
};

export default dbConnect;
