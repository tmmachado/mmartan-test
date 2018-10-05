const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

app.use(express.static('./public'));

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(process.env.PORT);