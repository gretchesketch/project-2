const sequelize = require("sequelize");
const cors = require('cors');


class DbSearch {
    static getDbSearchInstance() {
        return instance ? instance : new DbSearch();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM videogames;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async insertNewVideogames(videogames) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO videogamess (videogames) VALUES (?);";

                connection.query(query, [videogames, dateAdded] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                videogames : videogames,
                dateAdded : content
            };
        } catch (error) {
            console.log(error);
        }
    }

    // async deleteRowById(id) {
    //     try {
    //         id = parseInt(id, 10); 
    //         const response = await new Promise((resolve, reject) => {
    //             const query = "DELETE FROM names WHERE id = ?";

    //             connection.query(query, [id] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.affectedRows);
    //             })
    //         });

    //         return response === 1 ? true : false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async updateNameById(id, name) {
    //     try {
    //         id = parseInt(id, 10); 
    //         const response = await new Promise((resolve, reject) => {
    //             const query = "UPDATE names SET name = ? WHERE id = ?";

    //             connection.query(query, [name, id] , (err, result) => {
    //                 if (err) reject(new Error(err.message));
    //                 resolve(result.affectedRows);
    //             })
    //         });

    //         return response === 1 ? true : false;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    async searchByVideogame(videogame) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM videogames WHERE videogames = ?;";

                connection.query(query, [videogames], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbSearch;