import express from 'express';
import router from './controllers';
import connectDB from './shared/utils/dataBase/mongo';

export const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from Server Side. Please find the Product List Below:-",
    name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
  });
});

app.use("/api", router);

export default app



