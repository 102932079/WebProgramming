var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // constructor instantiate object with this class
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    //method function inside a class
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
// inhertins
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
        // this.name = name; we dont need those beacuse we did it in another constructor and we got super link here
        // this.email = email;
        // this.age = age;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
//let john = new User('John Doe', 'john@gmail.com', 34); // create new object john with the class user
//john.register(); // return john dow is registered
//console.log(john.age); //return 34
var mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33); //mike is an user but he is also a member
mike.payInvoice();
