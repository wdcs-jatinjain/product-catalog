import express from 'express';
import router from './src/routes/user.routes';
import connectDB from './src/shared/utils/dataBase/mongo';

export const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  console.log("connectDB");
  res.json({
    message: "Hello World from Server Side. Please find the Product List Below:-",
    name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
  });
});

app.use("/register", router);

export default app



