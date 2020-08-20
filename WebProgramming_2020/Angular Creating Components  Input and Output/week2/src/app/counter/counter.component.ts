import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit 
{

  //need to set up and define that title here a input so can work in html there
  


  @Input()
  // title variable, making title variable here input
  title: string ="Default Counter";
  
  

  //oncounted customer event that input or output the behiarver , pass from child to parent
  //output oprater
  // go ahead if you able to do sth
  @Output()
  counted: EventEmitter<number> = new EventEmitter<number>();
  //fontcolour: string = "black";
  active: boolean = false;
  // defalut to display

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
//method
//value: any 
// attribute ,m class and style bindings
  onComponentClick(value: MouseEvent)
  {
    //console.log(value);
    value.preventDefault();

    this.counter += 1;
    //method only add 1 at the time
    //the most easy way to pass a event
    this.counted.emit(1);

    if(this.counter >= 10)
    {
      //this.fontcolour = "red";
      this.active = true;
    }
  }

}
