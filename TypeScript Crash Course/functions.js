function getSum(num1, num2) {
    return num1 + num2; // if return a string will acuure an error
}
//console.log(getSum(1,4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('3', 5));
// still will work
function getName1(firstName, lastName) {
    return firstName + '' + lastName;
}
console.log(getName1('John', 'Doe'));
function getName2(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
console.log(getName2('John', 'Doe'));
function myVoid() {
    return;
}