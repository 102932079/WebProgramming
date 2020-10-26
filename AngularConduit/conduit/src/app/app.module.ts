// <!-- http request made in angualr http client-->
// <!-- enable http servies -->
// <!-- import from module and add into application -->
// <!-- giving access to http clinet -->
// import this first
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http
import { HttpClientModule } from '@angular/common/http';
//routes, routermodule
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//root compo + 2 comp + 2 routes
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AccountComponent } from './routes/account/account.component';
import { ArticlesComponent } from './routes/articles/articles.component';

// routes and their path
const routes: Routes = [
  {path: "Articles", component: ArticlesComponent},
  {path: "Account", component: AccountComponent}
];

@NgModule({//root compo + 2 comp + 2 routes
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    AccountComponent,
    ArticlesComponent
  ],

   //add HttpClientModule here
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
