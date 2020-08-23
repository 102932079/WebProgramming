import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//vs code bug issue
export class AccountService {
  // | or 

  constructor() { }

  // an username could have multiple
  //username:string | null = null;
  // set default vaule
  //username as service

    username:string = null;

  //create a method call login

  login(attempt: string)
  {
    if (attempt == "bob")
    {
      this.username = "bob";
    }
    else
    {
      alert("username is incorrect")
    }
  }

}
