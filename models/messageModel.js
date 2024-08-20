/*
const pgp = require("pg-promise")();
const db = pgp("postgres://user:password@database:5432/db");
*/
const {db} = require('./db')

module.exports = {
  getAllMessages: () => db.any("SELECT * FROM message"),
  createMessage: (msg) => db.none("INSERT INTO message (msg) VALUES ($1)", [msg]),
  updateMessage: (oldType, newType) => db.none("UPDATE message SET type = $2 WHERE type = $1", [oldType, newType]),
  deleteMessage: (id) => db.none("DELETE FROM message WHERE id = $1", [id]),
};
