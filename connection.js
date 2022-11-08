const SQLConnection = require('tedious').Connection;
require('dotenv').config();

var config = {
    server: process.env.DB_HOST,
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }
    },
    options: {
        database: process.env.DB_NAME
    }
}

var connection = new SQLConnection(config);
connection.on('connect', function(err) {
    console.log("Connected");
});

connection.connect();

module.exports = connection;