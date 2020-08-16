import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World From component';
  counter : number = 0;

  onCoolButtonClick() : void
  {
    //this.counter = this.counter +1;
    //this.counter++;
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

    }
  }
}
