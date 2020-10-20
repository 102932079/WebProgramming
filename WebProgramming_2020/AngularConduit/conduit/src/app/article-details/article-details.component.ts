import { Component, Input, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
//import interface
import { Article } from '../article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  //@Input() and @Output() allow Angular to share data between the parent context and child directives or components. An @Input() property is writable while an @Output() property is observable.
  //Use the @Input() decorator in a child component or directive to let Angular know that a property in that component can receive its value from its parent component. It helps to remember that the data flow is from the perspective of the child component. So an @Input() allows data to be input into the child component from the parent component.
  //import input and recall article interface
  @Input()
  arrtt: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
