class Character {
    constructor(name, type) {
      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (!allowedTypes.includes(type)) {
        throw new Error(`Type must be one of: ${allowedTypes.join(', ')}`);
      }
  
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be a string with length between 2 and 10 characters');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  }
  
  export default Character;
  