import dotenv from 'dotenv'
dotenv.config();

import mysql from "mysql2";
const {
    HOST_DB, USERNAME_DB, PASSWORD_DB, NAME_DB,
} = process.env;

export const db = mysql.createPool({
    host: HOST_DB,
    user: USERNAME_DB,
    password: PASSWORD_DB,
    database: NAME_DB,
    multipleStatements: true
})

console.log("\x1b[34m", '[INFO]', "\x1b[0m",'DB Pool created!')