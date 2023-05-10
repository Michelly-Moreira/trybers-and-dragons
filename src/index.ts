import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP } from './Battle';

const player1 = new Character('Hanna');
const player2 = new Character('Intruder');
const player3 = new Character('Flyer');

for (let i = 0; i < 5; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

function runBattles(Battles: Battle[]): void {
  Battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, runBattles };