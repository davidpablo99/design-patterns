import { Enemy } from "./Enemy";

export class Boss implements Enemy{
    
    constructor(private name: String){
        this.name = name
    }
    attack(): void {
        console.log('Boss attacks')
    }
}