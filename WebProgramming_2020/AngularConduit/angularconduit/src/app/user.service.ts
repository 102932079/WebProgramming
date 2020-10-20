import { Injectable } from '@angular/core';
import { UserLoginCommand } from './user';
import { HttpClient } from '@angular/common/http';

// login request
@Injectable ({
    providedIn: 'root'
})
export class UserService{
    constructor(
        private httpClient: HttpClient
    ){}

    user: User;
    loading: boolean = false;
    
    //rename this method to get() - login()
    login(email: string, password: string)
    {        
        let request = this.httpClient.post("https://swindev.me/users/login", 
        //body is in json user userdata schema
        {
            // remove ""
            user:{
                //unscessful login 
                // email: "gekki@bob.com",
                // password: "MyPasswordIsSecure12340"
                //get a 401 back error due to wrong login detail

                // scessful loginb for that endpoint
                // email: "string",
                // password: "string"
                email: email,
                password: password
            }
        } as UserLoginCommand
        );
        
        
        request.subscribe(
            // first anymoutes funciton is the respond
        (response) => 
        {
           console.log(response);
        },
        // error - anyname
            // senond anymoutes funciotn is the error
            // in the () is the name of the function method , it can be changed
        (error) => {
            //basic error handling
            // need consider the error need to be checked in the further make the error easier to spot
            if(error.status == 401){
                alert("Login failed. Wrong username and / or password. ")
            }
            //console.log("Error from http://swindev.me/articles", error);
        }
        );
       
    }
}

// The generate command requires to be run in an Angular project, but a project definition could not be found.
// npm run build
//ng update @angular/cli --migrate-only --from=1.7.3
//Repository is not clean. Please commit or stash any changes before updating.