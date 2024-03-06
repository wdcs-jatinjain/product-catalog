import dotenv from 'dotenv'
dotenv.config()

import { SERVER_PORT } from './config'
import { Server } from './server'

const server = new Server(SERVER_PORT)
server.start()

// import { Server } from "./server";

// const restApiPort = 8000;
// const graphqlPort = 4000;

// const restApiServer = new Server(restApiPort);
// const graphqlServer = new Server(graphqlPort);

// async function startServers() {
//   try {
//     await restApiServer.start();
//     await graphqlServer.start();
//   } catch (error) {
//     console.error("Error starting servers:", error);
//   }
// }

// startServers();
