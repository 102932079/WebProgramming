import { Component, OnInit } from '@angular/core';
//import articleservice
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  
  arrtt: Article;

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

}
