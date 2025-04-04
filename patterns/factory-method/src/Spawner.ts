import { Enemy } from "./Enemy";
import { Monster } from "./Monster";

export class Spawner {
    spawn(){
        console.log('Spawned an enemy')
        this.createEnemy()
    }
    createEnemy(): Enemy {
        console.log('Creating a monster as default')
        const monsterEnemy = new Monster()
        return monsterEnemy
    }
}