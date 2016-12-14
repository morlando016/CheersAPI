var express = require('express');
var AWS = require("aws-sdk");
var router = express.Router();

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});


//set up doc client so we can do operations on the database
var docClient = new AWS.DynamoDB.DocumentClient();
var table = "Users";

//Read user data
router.get('/:id', function(req, res, next) {

  //example of a json response
  res.json({username: 'Username001', email: 'email@hello.com'});
});

//Create new user
router.post('/', function(req, res, next) {

  res.send('POST a user. This is for creating.');

  console.log("Adding a new item...");

  //set this to info from mobile application later
  var userID = "john001";

  var params = {
      TableName:table,
      Item:{
          "userID": userID,
          "info":{
              "password": "john",
              "email": "john@john.com"
          },
          "preferences":{
            "drink":{
              "beer":{
                "Stout": true
              }
            }
          }
      }
  };

  //example of how to actually create a new user in the database
//the .put method is similar to the INSERT command in SQL
 /* docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  });*/

});

//Update user
router.put('/', function(req, res, next) {
  res.send('PUT a user. This is for updating.');
});

//Delete user
router.delete('/:id', function(req, res, next) {
  res.send('DELETE a user. This is for deleting.');
});

module.exports = router;
