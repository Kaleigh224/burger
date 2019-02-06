var connection = require("./connection.js");

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableInput, colOne, colTwo, valOne, valTwo, cb) {
        var queryString = `INSERT INTO ${tableInput} SET ?`;
        connection.query(queryString, {colOne:valOne, colTwo:valTwo}, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

        
    
    },

    updateOne: function(tableInput, newCol, newVal, chosenCol, chosenVal, cb) {
        var queryString = `UPDATE ${tableInput} SET ? WHERE ?`;
        connection.query(queryString, [{newCol:newVal}, {chosenCol:chosenVal}], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;