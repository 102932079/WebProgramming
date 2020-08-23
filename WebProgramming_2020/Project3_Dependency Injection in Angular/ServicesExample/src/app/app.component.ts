import { Component } from '@angular/core';
//import manually
import { AccountService } from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public accountService: AccountService; see part of shortcut
  
  //we want to depend on an account service and will be donw with a consteructor
  //anything we want to get just put inside of ()
  // for the shortcut just add public in fornt of accountService can replace other two part of shortcut code
  //this is how to crate the access for accountservice (method constructor and import) 
  //Injecting to use
  constructor( public accountService: AccountService)
  {
    //this.accountService = accountService; see part of shortcut

  }
  title = 'ServicesExample';

  performLogin()
  {
    //when we click it will automaticlly login as bob
    //the method will manipulate service then by calling i tmethod come into button
    this.accountService.login("bob")
  }
}
