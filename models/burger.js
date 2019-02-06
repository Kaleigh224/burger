var orm = require("./config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(valOne, cb){
        orm.insertOne("burgers", "burger_name", "devoured", valOne, false, function(res) {
            cb(res);
        });
    },

    updateOne: function(chosenVal, cb) {
        orm.updateOne("burgers", "devoured", true, "id", chosenVal, function(res) {
            cb(res);
        });
    }
}




module.exports = burger;