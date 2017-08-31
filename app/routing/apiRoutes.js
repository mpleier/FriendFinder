var express = require('express');
var path = require('path');
var friendsMatch = [];

module.exports = function(app){

app.get("/api/friends", function(req, res) {
res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.post("/api/friends", function(req, res) {


  var newFriend = req.body;
  res.json(friendsMatch);
  console.log(newFriend);

  friendsMatch.push(newFriend);




});

};
