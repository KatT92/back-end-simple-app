import query  from "../db/connection.js";

export async function getAllUsers() {
  const result = await query(`SELECT * FROM users;`);
  return result.rows;
}

export async function getUserById(id) {
  const result = await query(`SELECT * FROM users WHERE user_id = $1;`, [id]);
  return result.rows;
}

export async function createUser(body) {
  // const user_id = body.user_id;  
  const full_name= body.full_name;
    const data = await query(
    `INSERT INTO users( full_name) VALUES ($1) RETURNING full_name;`,
    [ full_name]
  );
 

  return data.rows;
}








