var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        });
    },

    insertOne: function(valOne, cb){
        orm.insertOne("burgers", "burger_name", "devoured", valOne, false, function(res) {
            cb(res);
        });
    },

    updateOne: function(chosenVal, cb) {
        orm.updateOne("burgers", "devoured", true, chosenVal, function(res) {
            cb(res);
        });
    }
}




module.exports = burger;