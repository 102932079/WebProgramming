//create an interface for class
interface UserInterface
{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface
{
    //property key value pair
    //public name: string; // access modifier public private
    //private email: string; // the error ts2341 property is private only acceible within class user
    //protected age: number;
    // private public(accesiable anywhere) protected(can not access outside but accesiable to any who inhertis this one)

    name: string; 
    email: string; 
    age: number;
    

    // constructor instantiate object with this class
    constructor(name: string, email: string, age: number)
    {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }
    
    //method function inside a class
    register()// method also can be private only can call with in class
    {
        console.log(this.name + ' is now registered');
    }

    payInvoice()
    {
        console.log(this.name + ' paid invoice');
    }
}

// inhertins
class Member extends User{
    id: number;

    constructor(id: number,name: string, email: string, age: number) // name email string age from user constructor
    {
        super(name, email, age);
        this.id = id;
        // this.name = name; we dont need those beacuse we did it in another constructor and we got super link here
        // this.email = email;
        // this.age = age;
    }

    payInvoice()
    {
        super.payInvoice();
    }

}

//let john = new User('John Doe', 'john@gmail.com', 34); // create new object john with the class user
//john.register(); // return john dow is registered
//console.log(john.age); //return 34

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);//mike is an user but he is also a member

mike.payInvoice();