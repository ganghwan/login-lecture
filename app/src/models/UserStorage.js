"use strict";

const db = require("../config/db");

class UserStorage{
    static getUserInfo(id) { 
        return new Promise((resolve,reject)=> {
            const query = "select * from usersd where id = ?;";
            db.query(query,[id],(err,data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    

    static async save(userInfo) {
        return new Promise((resolve,reject)=> {
            const query = "insert into  userds(id,name,psword) values(?,?,?);";
            db.query(
                query,
                [userInfo.id,userInfo.name,userInfo.psword],
                (err) => {
                if (err) reject(`${err}`);
                else resolve({success:true});
            });
        });
    }
}

module.exports = UserStorage;