// import { SERVER_PORT } from './config';
// import app from './routes';
// app.listen(SERVER_PORT, () => {
//   console.log(`Server running on port ${SERVER_PORT}`);
// });
import { ApolloServer } from "@apollo/server";
import clientResolver from "./customer/resolvers/client.resolver";
import clientTypeDef from "./customer/typeDefs/client.type";

