
class EventsRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    // Tries to delete an event by id, and returns the number of records deleted;
    remove(id) {
        return this.db.result('DELETE FROM events WHERE id = $1', +id, r => r.rowCount);
    }

    // Tries to find a user product from user id + product name;
    find(values) {
        return this.db.oneOrNone("SELECT * FROM events WHERE id_createur = ${id_createur} AND title = ${eventTitle} ", {
            id_createur: +values.id_createur,
            eventTitle: values.eventTitle
        });
    }

    // Returns all product records;
    all() {
        return this.db.any('SELECT * FROM events');
    }

    // Returns the total number of products;
    total() {
        return this.db.one('SELECT count(*) FROM events', [], a => +a.count);
    }
}
module.exports = EventsRepository;