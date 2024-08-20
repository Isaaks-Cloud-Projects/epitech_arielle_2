/*
const pgp = require("pg-promise")();
const db = pgp("postgres://user:password@database:5432/db");
*/
const {db} = require('./db')

module.exports = {
  getAllEvents: () => db.any("SELECT * FROM events"),
  createEvent: (organisatorId, title, type, country, city, address, duration, ageMin, ageMax) => db.none("INSERT INTO events (organisatorid, title, type, country, city, address, duration, agemin, agemax) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [organisatorId, title, type, country, city, address, duration, ageMin, ageMax]),
  updateEvent: (oldType, newType) => db.none("UPDATE events SET type = $2 WHERE type = $1", [oldType, newType]),
  deleteEvent: (id) => db.none("DELETE FROM events WHERE id = $1", [id]),
};
