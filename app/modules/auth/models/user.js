'use strict';
const DB = global.DB;

var User = function(user) {
    this.login = user.login;
    this.instagram_username = user.instagram_username;
    this.password = user.password;
}

User.seed = function(result) {
    DB.query("INSERT INTO users set login=?, instagram_username=?, password=?", ['navruz', 'rumi.ng', '123456'], function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        console.log(res.insertId);
        result(null, res.insertId);
    }
    });
}

User.getData = function(login, result) {
    DB.query("SELECT login FROM users where login = ? limit 1", [login], function (err, res) {
    if(err) {
        result(err, null);
    }
    else{
        result(null, res);
    }
    });
}

module.exports = User