// not js ts file
//console.log('Hello from ts');

//create variable with let
let myString: string;
let myNum: number; 
let myBool: boolean;
let myVar: any;

// let strArr: string[];//array of string
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number]; // tuple need to match the type even order of the type

//vscode will check the datatype for you(and point out the error)
myString = 'Hello World';// catenate is ok // funciton return is ok
//myString = 'Hello'.slice(0, 3); //return hel
myNum = 22;//all number type 
myBool = true;
myVar = 5;//abolutely any thing (type)

strArr = ['Hello','World'];
numArr = [1,2,3];
boolArr = [true, false, true];

strNumTuple = ['Hello', 4];
//strNumTuple = ['Hello', 4,3,4,5,6]; we can do this beacuse once we pass the inital requirement we can add more data in the array works like a union


//both here null and undefined are working
let myVoid: void = null;//let myVoid: void = undefined;
let myNull: null = null;//let myNull: null = undifined;
let myUndefined: undefined = null;//let myUndefined: undefined = undefined;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
// everytime that before try the code need convert to js with tsc(like dotnet build)

// tsc types.ts -w (watch mode convert auto itself)