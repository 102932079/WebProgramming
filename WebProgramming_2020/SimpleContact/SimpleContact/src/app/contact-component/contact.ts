//delete spec file + add contact class

export class Contact {
    Title: string;
    Name: string;
    Address: string;
    ImgUrl: string;

    /**
     *constructor and Inheritance
     */
    constructor(title: string, name: string, address: string, url: string) {
        //super();
        this.Title = title;
        this.Name = name;
        this.Address = address;
        this.ImgUrl = url;
        
    }
}