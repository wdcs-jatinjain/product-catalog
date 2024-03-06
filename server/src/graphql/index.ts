import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginUsageReportingDisabled } from '@apollo/server/plugin/disabled';
import { customDirectives } from './schemas-and-resolvers/directives';
import { federatedSchema } from './schemas-and-resolvers';

const buildPlugins= ()=> {
  return [
    ApolloServerPluginUsageReportingDisabled(),
  ]
}

export const server = new ApolloServer({
schema:customDirectives((federatedSchema)),
allowBatchedHttpRequests: true,
plugins: buildPlugins(),
})
