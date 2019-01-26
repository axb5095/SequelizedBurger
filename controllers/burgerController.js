var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models")

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll().then(function(data) {
  const burgerList = data.map(burger => burger.dataValues);
  console.log(burgerList);    
    var hbsObject = {
      burger: burgerList
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  db.burger.create({
    name: req.body.name,
    Eaten: false
  }).then(function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  console.log("this hit");
  db.burger.update({
    Eaten: req.body.eaten
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.status(200).end();
  });
});

router.delete("/api/burger/:id", function(req, res) {
  
  db.burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.status(200).end()
  })
});

// Export routes for server.js to use.
module.exports = router;
