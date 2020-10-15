import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class UserService{
    constructor(
        private httpClient: HttpClient
    ){}

    get()
    {        
        let request = this.httpClient.post("https://swindev.me/users/login", );
        this.loading = true;
        this.loaded = false;
        
        request.subscribe((response) => 
        {
           
        


        },
        (error) => {
            console.log("Error from http://swindev.me/articles", error);
        }
        );
       
    }
}

// The generate command requires to be run in an Angular project, but a project definition could not be found.
// npm run build
//ng update @angular/cli --migrate-only --from=1.7.3