import { Enemy } from "./Enemy"

export class Monster implements Enemy {
    
    attack(){
        console.log('monster attacks!')
    }
}