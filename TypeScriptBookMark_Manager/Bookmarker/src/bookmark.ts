export class Bookmark {//like c#
    //proerty
    title: string;
    icon: string;
    favorite: boolean = false;
    url: string = "";
    //ctor
    constructor(title: string, favorite: boolean, icon: string) {
        this.title = title;
        this.favorite = favorite;
        this.icon = icon;
    }
    //method
    setUrl(newUrl: string) {
        //This method splits a String object into an array of strings by separating the string into substrings. split()
        let userIcon = newUrl.replace('http://','').replace('https://','').replace('www\.','').split(/[/?#]/);
        let domain = userIcon[0];
        this.icon = `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`;
        this.url = newUrl;
        //use seturl to set the url initially
    }

    getUrl(): string {
        return this.url;
        //gets the url stored in the object box from the element on the page
    }
}

export class CreateElementBookMark {
    //create object with class
    bookmark: Bookmark;
    //ctor
    constructor(bookmark: Bookmark) {
        this.bookmark = bookmark;
    }
    //display the template conent function
    createBookMark(fragment: HTMLTemplateElement) {
        //The Document object's importNode() method creates a copy of a Node or DocumentFragment from another document, to be inserted into the current document later.
        //change boolean false-> true
        let instance = document.importNode(fragment.content, true);
        //title
        let title = instance.querySelector('.title');
        if (title == null){
            return null;
        }
        title.innerHTML = this.bookmark.title;
        //url
        let url = instance.querySelector('.url');
        if (url == null){
            return null;
        }
        url.innerHTML = this.bookmark.url;
        //icon
        let icon = instance.querySelector('.img');
        if (icon == null){
            return null;
        }
        icon.setAttribute('src', this.bookmark.icon);

        return instance;//instance is the new content of template element, fragment is the old content of template element(the variable of HTMLTemplateElement)
    }

}