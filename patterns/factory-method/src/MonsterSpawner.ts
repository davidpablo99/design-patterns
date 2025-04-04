import { Enemy } from "./Enemy";
import { Monster } from "./Monster";
import { Spawner } from "./Spawner";

export class MonsterSpawner extends Spawner{
    createEnemy(): Enemy {
        console.log('Creating a monster')
        const monsterEnemy = new Monster()
        return monsterEnemy
    }
}