import { mergeTypeDefs } from "@graphql-tools/merge";

// import clientTypeDef from "./client.type.js";
import clientAuthTypeDef from "./clientauth.type.js";

const mergedTypeDefs = mergeTypeDefs([clientAuthTypeDef]);

export default mergedTypeDefs;

