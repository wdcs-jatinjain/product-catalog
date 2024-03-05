// import express from "express";
// import http from "http";
// import dotenv from "dotenv";
// import path from "path";
// import passport from "passport";
// import cors from 'cors'
// import session from 'express-session'
// import connectMongo from 'connect-mongodb-session'
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import { buildContext } from "graphql-passport";
// import clientTypeDef from "./customer/typeDefs/client.type.js";
// import clientResolver from "./customer/resolvers/client.resolver.js";
// import { configurePassport } from "./passport/passport.config.js";
// import { MONGO_URL, SESSION_SECRET } from "./config.js";

// dotenv.config();
// configurePassport();

// const __dirname = path.resolve();
// const app = express();

// const httpServer = http.createServer(app);
// const MongoDBStore = connectMongo(session);

// const store = new MongoDBStore({
//     url:MONGO_URL,
//     collection: "sessions",
// });

// store.on("error", (err: any) => console.log(err));

// app.use(
//     session({
//         secret:SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false, 
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7,
//             httpOnly: true,
//         },
//         store: store,
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// const server = new ApolloServer({
//     typeDefs: clientTypeDef,
//     resolvers: clientResolver,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });
// await server.start()
// app.use(
//     "/graphql",
//     cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//     }),
//     express.json(),
//     expressMiddleware(server, {
//         context: async ({ req, res }) => buildContext({ req, res }),
//     })
// );


// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// await connectDB();

// console.log(`🚀 Server ready at http://localhost:4000/graphql`);


import server from './server';

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});