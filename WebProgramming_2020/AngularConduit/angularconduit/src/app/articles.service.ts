// ng g s Articles
//ng update @angular/cli --migrate-only --from=10.0.4

import { Injectable } from '@angular/core';
import { Article } from './article';


@Injectable({
    providedIn: 'root'
})


export class ArticlesService {
    // defalut to a empty array
    // dont have to define as public
    articles: Article[] = [];
    loading: boolean = false;
    loaded: boolean = false;

    // copy from compenet to this service
    private httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * go and get a articlesenvelpe from the server and store it locally
     */

      // this. to get this element
  //response(values)
  // those login should be in server

    get()
    {
        // get a url in there
        // to get a data dont doesn't define what to do after get data
        // import articles envelope before use
        // get requeist for the end point will be this type
        // get -- post
        let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
        // arrow funciton here is for when we get the response we will get to
        // response is variable name chould be anything else data balh balh
        this.loading = true;
        this.loaded = false;

        request.subscribe((response) => 
        {
            this.articles = response.articles;
            this.loading = false;
            this.loaded = true;
        //console.log(response);
        // need crate a class for this
        //this.art = response.articles;


        })
        // .where(x=> x.Id == "1")
    }
}
