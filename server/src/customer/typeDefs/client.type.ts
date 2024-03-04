const clientTypeDef = `#graphql
type Client {
    _id:ID!
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
    authClient:Client
    client(clientId:ID!): Client
}

type Mutation {
    signUp(input:SignUpInput!):Client
    login(input:LoginInput!):Client
    logout:LogoutResponse
}

input SignUpInput {
    name:String!
    email:String!
    password:String!
    phone:String!
    city:String!
    address:String!
    country:String!
    zipCode:String!
}
input LoginInput {
    email:String!
    password:String!
}

type LogoutResponse {
    message:String!
}
`
export default clientTypeDef

