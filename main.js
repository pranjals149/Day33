const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express')

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: mySchema
}));

app.listen(3000, (err) => {
    if (err) { console.log(err) }
    else { console.log('Server Started') }
})