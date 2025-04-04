import { Boss } from "./Boss";
import { Enemy } from "./Enemy";
import { Spawner } from "./Spawner";

export class BossSpawner extends Spawner{
    createEnemy(): Enemy {
        console.log('Creating a boss enemy.')
        const bossEnemy = new Boss('luffy')
        return bossEnemy
    }
}