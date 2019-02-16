const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const fs = require('fs')

// Construct a schema, using GraphQL schema language
const schemaFile = fs.readFileSync(__dirname + '/schema.gql').toString('utf-8')
const schema = buildSchema(schemaFile)

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: (req, res) => `Hello World!`,
  bye: (req, res) => `Good bye!`
}

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
)
app.listen(49500)
console.log(`😃Running a GraphQL API server at serverurl/graphql`)
