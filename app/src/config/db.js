const mysql =require("mysql");

const db = mysql.createConnection({
    host: "49.50.165.243",
    port: "8889",
    user: "root",
    password: "dtmQw24@",
    database: "test"
});


db.connect();

module.exports = db;