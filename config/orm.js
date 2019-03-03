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
        var queryString = `INSERT INTO ${tableInput} (??, ??) VALUES (?, ?)`;
        console.log(queryString, "KH1")
        connection.query(queryString, [colOne, colTwo, valOne, valTwo], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

        
    
    },

    updateOne: function(tableInput, newCol, newVal, chosenVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, newCol, newVal, chosenVal], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;