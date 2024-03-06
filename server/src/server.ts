import express from "express";
import { server as GraphqlServer } from "./graphql/index";

import connectDB from "./shared/utils/dataBase/mongo";
import router from "./controllers";
import { SERVER_PORT } from "./config";

export class Server {
  app: any;
  port: any;

  constructor(port: any) {
    this.port = port;
    this.app = express();
    this.setupRoutes();
    this.setupMiddleware();
    this.setupServer()
  }
  setupMiddleware() {
    this.app.use(express.json());
    connectDB();
  }
  setupServer() {
    try {
      this.app.listen(SERVER_PORT, "8500");
      console.log(`REST server listening on ${SERVER_PORT}`);
    } catch (err) {
      this.app.log.error(err);
    }
  }
  setupRoutes() {
    this.setupServer();
    this.app.get("/", (req: any, res: any) => {
      res.json({
        message:
          "Hello World from Server Side. Please find the Product List Below:-",
        name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
      });
    });
    this.app.use("/api", router);
  }

  async start() {
    try {
      await this.graphql();
      await this.app.listen(this.port, "4000");
      console.log(`Graphql server listening on ${this.port}`);
    } catch (err) {
      this.app.log.error(err);
    }
  }

  async graphql() {
    try {
      await GraphqlServer.start();
      this.app.route({
        url: "/graphql",
      });
    } catch (e: any) {
      console.log("ERROR ON CREATING GRAPHQL");
      console.error(e);
      throw e;
    }
  }
}
