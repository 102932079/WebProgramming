// ng g class planet (create class)
//Create a planet class with the following properties: name: string moons: number distancefromSun: number 
export class Planet
{
    name: string
    moons: number
    distancefromSun: number

    constructor(name:string, moons: number, distancefromSun: number)
    {
        this.name = name;
        this.moons = moons;
        this.distancefromSun = distancefromSun;
    }
}