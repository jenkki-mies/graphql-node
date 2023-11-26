// My PC is using this software
// PS C:\Users\jonmc\Documents\Omnia\GraphQL\server> npm ls
// server@1.0.0 C:\Users\jonmc\Documents\Omnia\GraphQL\server
// ├── express-graphql@0.12.0
// ├── express@4.18.2
// ├── graphql@15.3.0
// ├── lodash@4.17.21
// ├── mongodb@6.3.0
// └── mongoose@8.0.1

const express = require('express');
// import { graphqlHTTP } from "express-graphql" // ES6
const { graphqlHTTP } = require("express-graphql") // CommonJS
// const graphqlHTTP = require('express-graphql'); // express-graphql@0.12.0
const schema = require('./schema/schema');

const mongoose = require('mongoose');
const uri = "mongodb+srv://jonmcgill2:wxzQFvRxHibXLwu3@cluster0.r7ueebj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

console.log(`connection to database ready.\n`);

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
