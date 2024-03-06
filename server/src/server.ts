import express, { Request } from "express";
import { server as GraphqlServer } from "./graphql/index";
import connectDB from "./shared/utils/dataBase/mongo";
import router from "./controllers";
import {  SERVER_PORT } from "./config";

const context = async (request:Request) => {
  return { dataLoaders: {}, headers: request.headers };
};

export class Server {
  app: any;
  port: Number;

  constructor(port:Number) {
    this.port = port;
    this.app = express();
    this.setupRoutes();
    this.setupMiddleware();
    this.setupServer()
  }
  async start() {
    try {
      await this.graphql();
await this.app.listen(this.port, '0.0.0.0')
console.log(`GraphQl server running on ${this.port}`)
     } catch (err) {
      this.app.log.error(err);
    }
  }


  setupMiddleware() {
    this.app.use(express.json());
    connectDB();
  }
  setupServer() {
    try {
      this.app.listen(SERVER_PORT);
      console.log(`REST server listening on ${SERVER_PORT}`);
    } catch (err) {
      this.app.log.error(err);
    }
  }
  setupRoutes() {
    this.app.get("/", (req: any, res: any) => {
      res.json({
        message:
          "Hello World from Server Side. Please find the Product List Below:-",
        name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
      });
    });
    this.app.use("/api", router);
  }
  async graphql() {
    try {
      await GraphqlServer.start();
      this.app.route({
        url: "/graphql",
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        handler: { context },

      });
    } catch (e: any) {
      console.log("ERROR ON CREATING GRAPHQL");
      console.error(e);
      throw e;
    }
  }
  

}
