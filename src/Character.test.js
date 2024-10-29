import Character from './Character';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

test('Bowman instance should have correct properties', () => {
  const bowman = new Bowman('Legolas');
  expect(bowman.name).toBe('Legolas');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Swordsman instance should have correct properties', () => {
  const swordsman = new Swordsman('Aragorn');
  expect(swordsman.name).toBe('Aragorn');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Magician instance should have correct properties', () => {
  const magician = new Magician('Gandalf');
  expect(magician.name).toBe('Gandalf');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Daemon instance should have correct properties', () => {
  const daemon = new Daemon('Azazel');
  expect(daemon.name).toBe('Azazel');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('Undead instance should have correct properties', () => {
  const undead = new Undead('SkullKing');
  expect(undead.name).toBe('SkullKing');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Zombie instance should have correct properties', () => {
  const zombie = new Zombie('ZombieX');
  expect(zombie.name).toBe('ZombieX');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('should throw error for invalid name length', () => {
  expect(() => new Bowman('A')).toThrow('Name must be a string with length between 2 and 10 characters');
  expect(() => new Swordsman('ThisNameIsTooLong')).toThrow('Name must be a string with length between 2 and 10 characters');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('InvalidName', 'Warrior')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
