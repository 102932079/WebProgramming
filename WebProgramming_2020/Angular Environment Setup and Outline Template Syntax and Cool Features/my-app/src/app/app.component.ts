import { Component } from '@angular/core';
//that css html ts file are conplemely ralated with eachother
// with angular we are not going to write any raw javascript any more
// no get sth by id no doucument no window, will be sth wrong, angular has its own way for doing other ways to reach variable
//no more get element by id. we are no using doucument and window variable anymore
//decratoer are for define the componect
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World From component';
  // better alway do for the type of variable infornt good habit
  //number is number in javascripte no int no double no float
  counter : number = 0;
  // the most basic funtion that to build a counter
  //method name patasis data and body return type
  //the return type will atuomatcally doing for us
  //run ng -serve -- open (similar to live server to see the demo prototype)
  //cleaner the raw javascript

  onCoolButtonClick() : void
  {
    // important to use this with angular otherwise ,system wont find the variable
    //generlay work with javascript this keyword very essencual 
    //alert("Hello World");
    //this.counter = this.counter +1;
    //this.counter++;
    //[initial][render]
    this.counter += 1;

    if(this.counter % 5 == 0)
    {
      this.title = "Fizz";      
    }
    else if(this.counter % 3 == 0)
    {
      this.title = "Buzz";
    }
    else
    {
      this.title = "Boring.";
      // angular will update thing on the going , compaileing all the time.
      // ; : not updating, ; not in typescript

    }
  }
}
