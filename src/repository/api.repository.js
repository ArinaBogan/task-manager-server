const pool = require('../db');

async function getUserByEmail(email) {
    const client = await pool.connect();
    const sql = `select * from users where email=$1`;
    const result = (await client.query(sql, [email])).rows;
    return result
}

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    const sqlCreate = `insert into users(name, surname, email, pwd)
    values ($1,$2,$3,$4) returning*`
    const result = (await client.query(sqlCreate, [name, surname, email, pwd])).rows;
    return result
}

async function authUser(email,pwd){
    const user=await getUserByEmail(email)
    if(!user.length) throw new Error('email s not found');

}
module.exports = { getUserByEmail, createUserDB }