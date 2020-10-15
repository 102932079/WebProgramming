import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  private logger: LoggerService;

  constructor(logger: LoggerService) { 
    logger.log("Signup Component was created");
    this.logger = logger;

  }

  ngOnInit() {
  }

  signupButtonClicked() {
    this.logger.log("Signup button cicked");
  }

}
