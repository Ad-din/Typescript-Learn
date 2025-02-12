//Enum Type: No duplicate data, helps to store constants
//types: numeric, string, hetergenous

//numeric enum:
enum userRequest {
    getData,
    readData,
    deleteData,
    saveData
}
console.log(userRequest);

//string type 

enum userRequest2{
    addData="Hello",
    deleteData="by by",
    goData="erhee;l"
}

//heterogonous type -mix

enum userReqest3{
    addData=43,
    deleteData="ehrler"
}
console.log(userReqest3.addData);
//or
console.log(userReqest3["addData"]);

