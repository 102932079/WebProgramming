//create variable using object, defalut for contact class
export class Contact {
    public name: string;
    public title: string;
    public address: string;
    public imageUrl: string;

    //ctor

    /**
     *
     */
    constructor(name: string, title: string, address: string, imageUrl: string ) 
    {
        this.name = name;
        this.title = title;
        this.address = address;
        this.imageUrl = imageUrl;
        
        
    }
}
