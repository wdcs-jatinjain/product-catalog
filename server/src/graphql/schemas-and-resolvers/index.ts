const baseQuery= `#graphql
  type Client {
    _id: ID!
    name:String!
    email:String!
    password:String!
    phone:String!
    city:String!
    address:String!
    country:String!
    zipCode:String!
  }

  type Query {
    clients: [Client!]
    client(clientId:ID!): Client
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(input: UpdateClientInput!): Client!
    deleteClient(clientId:ID!): Client!
  }

 

  input CreateClientInput {
    name:String!
    email:String!
    password:String!
    phone:String!
    city:String!
    address:String!
    country:String!
    zipCode:String!
  }

  input UpdateClientInput {
    _id: ID!

    name:String
    email:String
    password:String
    phone:String
    city:String
    address:String
    country:String
    zipCode:String
  }
`;


const baseResolvers = {
    Query: {},
    Mutation: {},
  };
  
  const federatedSchema = [
    {
      typeDefs: baseQuery,
      resolvers: baseResolvers,
    }
  ]

  export { baseQuery, federatedSchema };