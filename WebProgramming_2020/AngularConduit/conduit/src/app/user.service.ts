// {ALLOW_MULTIPLE_PLATFORMS as ɵALLOW_MULTIPLE_PLATFORMS} from. './application_ref';
import { Injectable } from '@angular/core';
//import http and interface
import { HttpClient } from '@angular/common/http';
import { UserEnvelope, User, UserCreateCommand, UserLogInCommand, user } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  
  createuser(User: User){
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/users/login",{
      //this part is body, body is in json use userdata schema,see json below or in interface
      user:User

    }as UserCreateCommand);

    request.subscribe((response) => {//first anonymous funciotn is response
      this.user = response.user;
    },
    (error) => {//second anonymous function is error, error could be any name
      //basic error handling, need consider the error need t obe checked in the future development , make it easier to spot
      console.log("The Error recieved from http://swindev.me/swagger", error);
      
    });
  }
  
  //login request, this post can be rename to login post create sth
  //login(email: string, password: string){}
  userLogin(User: user) {
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/users/login",{
      user:User
      //e.g.
      // remove ""
      //user:{
      //unscessful login 
      // email: "gekki@bob.com",
      // password: "MyPasswordIsSecure12340"
      //get a 401 back error due to wrong login detail

      // scessful loginb for that endpoint
      // email: "string",
      // password: "string"
    }as UserLogInCommand);

    request.subscribe((response) => {
      console.log(response);
    }, (error) => {
      //see error.status in dev tool f12
      if(error.status == 401){
        alert("Login unsuccessfully, incorrect email and/or password");
      }
    })
  }
}
// The generate command requires to be run in an Angular project, but a project definition could not be found.
// npm run build
//ng update @angular/cli --migrate-only --from=1.7.3
//Repository is not clean. Please commit or stash any changes before updating.