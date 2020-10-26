function getSum(num1:number, num2: number): number // the variable need to be a number and method return type also need to be a number
// this function is take two number and add them
{
    return num1 + num2; // if return a string will acuure an error
}

//console.log(getSum(1,4));

let mySum = function(num1: any, num2: any): number
{
    if(typeof num1 == 'string')
    {
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string')
    {
        num2 = parseInt(num2);
    }

    return num1 +num2;
}

console.log(mySum('3', 5));
// still will work

function getName1(firstName: string, lastName: string): string
{
    return firstName + '' + lastName;
}

console.log(getName1('John', 'Doe'));

function getName2(firstName: string, lastName?: string): string// question mark means optional so lastName became undefined
{
    if(lastName == undefined)
    {
        return firstName;
    }
    return firstName + '' + lastName;
}
console.log(getName2('John', 'Doe'));

function myVoid(): void
{
    return;
}



