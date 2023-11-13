const pool = require('../db');

async function getAllUsersDB() {
    const client = await pool.connect();
    const sql = `select*from users`
    const data = (await client.query(sql)).rows;
    return data;
}

async function createUsersDB(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = `INSERT INTO users(name,surname,email,pwd) values
    ($1,$2,$3,$4) returning*`
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;
    return data;
}

async function getUserByIdDB(id) {
    const client = await pool.connect();
    const sql = `select*from users where id=$1`
    const data = (await client.query(sql, [id])).rows;
    return data;
}

async function updateUserByIdDB(id, name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = `update users
    set name=$1, surname=$2, email=$3, pwd=$4
    where id=$5
    returning*`
    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return data;
}

async function patchUserDB(id, clientObj) {
    const client = await pool.connect();
    const sql = `select * from users where id=$1`
    const oldObj = (await client.query(sql, [id])).rows;
    const newObj = { ...oldObj[0], ...clientObj }
    const sqlUpdate = `update users
    set name=$1, surname=$2, email=$3, pwd=$4
    where id=$5 returning*`
    const result = (await client.query(sqlUpdate,
        [newObj.name, newObj.surname, newObj.email, newObj.pwd, id])).rows;
    return result;
}
module.exports = { getAllUsersDB, createUsersDB, getUserByIdDB, updateUserByIdDB, patchUserDB };