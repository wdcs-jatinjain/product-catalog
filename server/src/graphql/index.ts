import { ApolloServer } from "@apollo/server";
import clientAuthTypeDef from "../customer/typeDefs/clientauth.type";
import clientResolver from "../customer/resolvers/client.resolver";


export const server = new ApolloServer({
    typeDefs:clientAuthTypeDef ,
    resolvers:clientResolver ,
  })

