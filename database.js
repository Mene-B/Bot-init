const {Client} = require("pg");
const client = new Client({
    database: "databse",
    user: "postgres",
    password:"password",
    port: 5432,
    host: "localhost"
});

client.connect();

module.exports.clientPG = client;
