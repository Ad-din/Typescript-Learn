//Enum Type: No duplicate data, helps to store constants
//types: numeric, string, hetergenous
//numeric enum:
var userRequest;
(function (userRequest) {
    userRequest[userRequest["getData"] = 0] = "getData";
    userRequest[userRequest["readData"] = 1] = "readData";
    userRequest[userRequest["deleteData"] = 2] = "deleteData";
    userRequest[userRequest["saveData"] = 3] = "saveData";
})(userRequest || (userRequest = {}));
console.log(userRequest);
//string type 
var userRequest2;
(function (userRequest2) {
    userRequest2["addData"] = "Hello";
    userRequest2["deleteData"] = "by by";
    userRequest2["goData"] = "erhee;l";
})(userRequest2 || (userRequest2 = {}));
//heterogonous type -mix
var userReqest3;
(function (userReqest3) {
    userReqest3[userReqest3["addData"] = 43] = "addData";
    userReqest3["deleteData"] = "ehrler";
})(userReqest3 || (userReqest3 = {}));
console.log(userReqest3.addData);
//or
console.log(userReqest3["addData"]);
