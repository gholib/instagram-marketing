'use strict';

const jwt = require('jsonwebtoken')
const jwtConfig = require('../../../config/jwt')
const User = require('../../modules/auth/models/user')

exports.seed = function(req, res) {
    User.seed((err, user) => {
        if(err) {
            res.send(err)
        }

        res.json({error:false,message:"User added successfully!",data:user});
    });
}

exports.login = function(req, res) {
    const { login, password } = req.body
    const token = jwt.sign({ login:login, password:password }, jwtConfig.key, { expiresIn: '3600s' });

    res.json({login:login, token:token})
}

exports.getUser = function(req, res) {
    User.getData(global.Auth.user.login, (err, user) => {
        if(err) {
            res.send(err)
        }

        res.json({error:false,message:"Get user successfully!",data:user});
    });
}