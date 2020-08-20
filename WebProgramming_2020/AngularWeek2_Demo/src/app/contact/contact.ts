export class Contact {
    name: string;
    title: string;
    address: string;    
    imageUrl: string;

    
    constructor(name: string, title: string, address: string, imageUrl: string ) {
        this.name = name;
        this.title = title;
        this.address = address;
        this.imageUrl = imageUrl;

    }
}
