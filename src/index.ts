import Character from './Character';

const player1 = new Character('Hanna');
const player2 = new Character('Intruder');
const player3 = new Character('Flyer');
player1.levelUp();

export { player1, player2, player3 };