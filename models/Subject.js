var db = require("../dbconnection");
var fs = require("fs");
var Subject = {
  Save_Subject: function (Subject_, callback) {
    return db.query(
      "CALL Save_Subject(" +
        "@Subject_Id_ :=?," +
        "@Subject_Name_ :=?," +
        "@Exam_status_ :=?," +
        "@User_Id_ :=?," +
        "@Request_Status :=?)",
      [
        Subject_.Subject_Id,
        Subject_.Subject_Name,
        Subject_.Exam_status,
        Subject_.User_Id,
        Subject_.Request_Status,
      ],
      callback
    );
  },
  Accept_Subject: function (Subject_, callback) {
    console.log(">>>>>>>>>>>>>>>>>>", Subject_);

    console.log(">>>>>>>>>>>>>>>>>>", Subject_.Subject_Id, Subject_.Request_Status);
    
    return db.query(
      "CALL Accept_Subject(" + "@Subject_Id_ :=?," + "@Request_Status :=?)",
      [Subject_.Subject_Id, Subject_.Request_Status],
      callback
    );
  },
  Delete_Subject: function (Subject_Id_, Request_Status_, callback) {
    return db.query(
      "CALL Delete_Subject(@Subject_Id_ :=?, @Request_Status_ :=?)",
      [Subject_Id_, Request_Status_],
      callback
    );
  },
  Get_Subject: function (Subject_Id_, callback) {
    return db.query(
      "CALL Get_Subject(@Subject_Id_ :=?)",
      [Subject_Id_],
      callback
    );
  },
  Search_Subject: function (Subject_Name_, callback) {
    if (Subject_Name_ === undefined || Subject_Name_ === "undefined")
      Subject_Name_ = "";
    return db.query(
      "CALL Search_Subject(@Subject_Name_ :=?)",
      [Subject_Name_],
      callback
    );
  },
  //  Search_Pending_Subject
  Search_Pending_Subject: function (Subject_Name_, callback) {
    if (Subject_Name_ === undefined || Subject_Name_ === "undefined")
      Subject_Name_ = "";
    return db.query(
      "CALL Search_Pending_Subject(@Subject_Name_ :=?)",
      [Subject_Name_],
      callback
    );
  },
};
module.exports = Subject;
