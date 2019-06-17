var coonnection = require("../config/connection");

function createQmarks(num){var = [];
    for (var i = 0; i < num; i++){
        Array.push("?");
    }
    return Array.toString();
}

var orm ={
    selectAll: function(table, cd){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res){
            if (err){
                throw err;
            }
        cb(res);
    });
}
insertOne: function(table, cols, vals,cb){
    var dbQuery = "INSERT INTO" +
    table +
    " ("+ close.toString() + ") "; +
    "VALUES (" + createQmarks(vals.length) + ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });
}
updateOne : function(table,objColVals, condition, cb){
    var dbQuery = "UPDATE " +
    table +
    " SET " +
    translateSQL(objColVals) +
    " WHERE" +
    condition;

    console.log(dbQuery);
    connection.query(dbQuery, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });
},
deleteOne: function(table,condtion, cb){
    var dbQuery = "DELETE FROM" + table + " WHERE " + condtion;
    console.log(dbQuery);
    connection.query(dbQuery, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });    
}