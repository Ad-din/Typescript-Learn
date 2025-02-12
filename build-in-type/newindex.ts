//build in type:
//number,string,boolean, void, undefined, null;

//union define
let user: string|number;
//now we can declare both num and string.



//user Defined: array,
let id:number[];
let nameOfUser:string[];
//another way
let address:Array<String>;


//test
id=[34,322,23232,43];
console.log(id);


let userId:number=202;
let array:[30,343,343,43,4];

//if we want to use multiple type in array:
let multiTypeArray:(string|boolean|number)[];
//another way
let arrayTypes:Array<Number|Boolean>;
arrayTypes=[23.3,false,233,true,22,false];
arrayTypes.forEach(element => {
    console.log(typeof(element));
    
    
});
arrayTypes.sort();
console.log(arrayTypes);


