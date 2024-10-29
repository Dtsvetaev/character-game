// src/index.js
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

// Создаем экземпляры всех персонажей с фиктивными именами
const bowman = new Bowman('Рома');
const swordsman = new Swordsman('Коля');
const magician = new Magician('Вася');
const daemon = new Daemon('Петя');
const undead = new Undead('Гоша');
const zombie = new Zombie('Маша');

// Получаем контейнер для отображения на странице
const gameContainer = document.getElementById('game-container');

// Проверяем, существует ли контейнер
if (gameContainer) {
  gameContainer.innerHTML = `
    <p>Bowman: ${bowman.name}, Health: ${bowman.health}, Level: ${bowman.level}, Attack: ${bowman.attack}, Defense: ${bowman.defence}</p>
    <p>Swordsman: ${swordsman.name}, Health: ${swordsman.health}, Level: ${swordsman.level}, Attack: ${swordsman.attack}, Defense: ${swordsman.defence}</p>
    <p>Magician: ${magician.name}, Health: ${magician.health}, Level: ${magician.level}, Attack: ${magician.attack}, Defense: ${magician.defence}</p>
    <p>Daemon: ${daemon.name}, Health: ${daemon.health}, Level: ${daemon.level}, Attack: ${daemon.attack}, Defense: ${daemon.defence}</p>
    <p>Undead: ${undead.name}, Health: ${undead.health}, Level: ${undead.level}, Attack: ${undead.attack}, Defense: ${undead.defence}</p>
    <p>Zombie: ${zombie.name}, Health: ${zombie.health}, Level: ${zombie.level}, Attack: ${zombie.attack}, Defense: ${zombie.defence}</p>
  `;
} else {
  console.error("Element with id 'game-container' not found");
}

