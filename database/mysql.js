'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'instagram_marketing'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});


global.DB = dbConn;