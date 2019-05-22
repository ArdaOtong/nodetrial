var app = require('../app');

exports.getProducts = function (req, res) {

    var query = "SELECT * FROM Products";
    app.executeQuery(res, query);
    //res.send(product)
};