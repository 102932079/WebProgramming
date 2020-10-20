import { Component, OnInit } from '@angular/core';
//import user service
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  //import and recall userservice
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //login method
  login(){
    this.userService.userLogin(    
    {//json
        email: "newemail@gmail.com",
        password: "newpassword"
    });
    
  }
}
