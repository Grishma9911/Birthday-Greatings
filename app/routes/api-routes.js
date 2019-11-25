// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all greatings
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM greetings";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a Greatings
  app.post("/api/new/greetings", function(req, res) {
    console.log("Greetings Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO greatings (Mother_greet, Father_greet, Son_greet, Daughter_greet, SonInLaw_greet, DaughterInLaw_greet, GrandMa_greet, GrandMa_greet, Wifey_greet, Husbund_greet, Aniversery_greet, Girlfriend_greet, Boyfriend_greet) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.Mother_greet, req.body.Father_greet, req.body.Son_greet, req.body.Daughter_greet, req.body.SonInLaw_greet, req.body.DaughterInLaw_greet, req.body.GrandMa_greet, req.body.GrandMa_greet, req.body.Wifey_greet, req.body.Husbund_greet, req.body.Aniversery_greet, req.body.Girlfriend_greet, req.body.Boyfriend_greet], function(err, result) {
      if (err) throw err;
      console.log("Greetings Successfully Saved!");
      console.log(result);
      res.end();
    });
  });

  app.post("/api/new/user", function(req, res) {
    //console.log("Greetings Data:");
    console.log(req.body);
  
    var dbQuery = "INSERT INTO login (uid,uname) VALUES (?,?)";
  
    connection.query(dbQuery, [req.body.uid, req.body.upwd], function(err, result) {
      if (err) throw err;
      console.log("User Successfully Saved!");
      console.log(result);

      app.get("/home",function(response){
        console.log(response);
      });

      
      res.end();
    });
  });
};

