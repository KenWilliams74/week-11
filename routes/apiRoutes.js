// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, tastyEatz) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(tastyEatz.tables);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(tastyEatz.waitList);
  });

  app.post("/api/tables", function(req, res) {
    console.log(req.body);
    const { email, name, phone} = req.body;
    tastyEatz.seatCustomer(name, email, phone);
    res.end()
  });

  app.delete("/api/customer/:id", function (req, res){
    console.log("removing ID: " + req.params.id)
    tastyEatz.deleteCustomer(req.params.id);
    res.end()
  });

  app.get("/api/customer/:id", function (req, res){
    res.json(tastyEatz.getCustomerById(req.params.id));
  })

  app.put("/api/customer/:id", function (req, res){
    const { email, name, phone} = req.body;
    res.json(tastyEatz.editCustomerById(req.params.id, name, email, phone));
  })

};
