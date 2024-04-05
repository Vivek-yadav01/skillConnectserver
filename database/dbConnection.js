import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://vivekyadav:Vivek%40123@cluster0.60mcfby.mongodb.net/skillConnect?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
