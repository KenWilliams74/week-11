// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var Restaurant = require("./lib/restaurant");

const tastyEatz = new Restaurant("Tasty Eatz");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app, tastyEatz);
require("./routes/htmlRoutes")(app);



// customers = [
//     {
//         "customerName": "1Thom Thom",
//         "phoneNumber": "2344565678",
//         "customerEmail": "test1thom@gmail.com",
//         "customerID": "ThomTheKing"
//     },
//     {
//         "customerName": "2 Doo Daddy",
//         "phoneNumber": "5655655565",
//         "customerEmail": "test2@gmail.com",
//         "customerID": "YabbaDabbaDooDaddy"
//     },
//     {
//         "customerName": "3Howdy Doody",
//         "phoneNumber": "8675309",
//         "customerEmail": "test3@gmail.com",
//         "customerID": "BigPoppa3"
//     },
//     {
//         "customerName": "4Robert0",
//         "phoneNumber": "4588548545",
//         "customerEmail": "test4@gmail.com",
//         "customerID": "DomoArigatoMrRobert0"
//     },
//     {
//         "customerName": "5Robert",
//         "phoneNumber": "343",
//         "customerEmail": "test5@gmail.com",
//         "customerID": "RobertXavier"
//     },
//     {
//         "customerName": "6Mr. Mister",
//         "phoneNumber": "9568546343",
//         "customerEmail": "test6@gmail.comcom",
//         "customerID": "6mrmister"
//     }
// ]


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
}); 