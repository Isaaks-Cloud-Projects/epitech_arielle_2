//const pgp = require("pg-promise")();
//const DB_SERVICE = "postgres://admin:test123@localhost:5432/eventgestapp"
//const db = pgp("postgres://user:password@database:5432/db");
// const db = pgp(DB_SERVICE);
const {db} = require('./db')
module.exports = {
  getAllUsers: () => db.users.all(),
  createUser: (UserDTO) => db.users.add(UserDTO),
  //createUser: (nom, age) => db.none("INSERT INTO users (nom, age) VALUES ($1, $2)", [nom, age]),
  updateUser: (nom, age) => db.none("UPDATE users SET age = $1 WHERE nom = $2", [age, nom]),
  deleteUser: (id) => db.none("DELETE FROM users WHERE id = $1", [id]),
};
