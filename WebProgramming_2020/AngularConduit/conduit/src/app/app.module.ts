import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AccountComponent } from './routes/account/account.component';
import { ArticlesComponent } from './routes/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    AccountComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
