export class Character {
    constructor(name, type) {
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Некорректное значение');
        }

        const person = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        const isCorrect = person.findIndex(item => item === type)

        if (isCorrect === -1) {
            throw new Error('Некорректный тип');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
}
