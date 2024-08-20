

class UsersRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

     // Adds a new user, and returns the new object;
     add(userDTO) {
        console.log("object to store in database = ",userDTO);
        console.log("data-base firstname = ",userDTO.firstname);
        console.log("data-base lastname = ",userDTO.lastname);
        console.log("data-base email = ",userDTO.email);
        return this.db.one('INSERT INTO users(firstname,'
                                             +'lastname,'
                                             +'email,'
                                             +'password,'
                                             +'pseudo,'
                                             +'date_naissance,'
                                             +'sexe,'
                                             +'langue'
                                             +') VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *'
                                             ,[ userDTO.firstname, userDTO.lastname, userDTO.email, userDTO.password
                                             , userDTO.pseudo, userDTO.date_naissance, userDTO.sexe, userDTO.langue]);
    }

    // Tries to delete a user by id, and returns the number of records deleted;
    remove(id) {
        return this.db.result('DELETE FROM users WHERE id = $1', +id, r => r.rowCount);
    }

    // Tries to find a user from id;
    findById(id) {
        return this.db.oneOrNone('SELECT * FROM users WHERE id = $1', +id);
    }

    // Tries to find a user from name;
    findByFirstName(firstname) {
        return this.db.oneOrNone('SELECT * FROM users WHERE firstname = $1', firstname);
    }

    // Returns all user records;
    all() {
        return this.db.any('SELECT * FROM users');
    }

    // Returns the total number of users;
    total() {
        return this.db.one('SELECT count(*) FROM users', [], a => +a.count);
    }
}
module.exports = UsersRepository;