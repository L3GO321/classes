import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "../index";

test('basic test', () => {
    try {
        const bowerman = new Bowerman('Bowerman', 'Bowman');
        expect(bowerman.name).toBe('Bowerman');
        expect(bowerman.type).toBe('Bowman');
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('basic test', () => {
    try {
        const bowerman = new Bowerman('B');
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('swordsman', () => {
    try {
        const swordsman = new Swordsman('swordsman', 'Swordsman');
        expect(swordsman.type).toBe('Swordsman');
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('magician', () => {
    try {
        const magician = new Magician('Magician', 'Magician');
        expect(magician.attack).toBe(10);
        expect(magician.type).toBe('Magician')
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('daemon', () => {
    try {
        const daemon = new Daemon('demon', 'Daemon');
        expect(daemon.type).toBe('Daemon');
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('undead', () => {
    try {
        const undead = new Undead('Undead', 'Undead');
        expect(undead.attack).toBe(25);
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})

test('zombie', () => {
    try {
        const zombie = new Zombie('Zombie', 'Zombie');
        expect(zombie.defence).toBe(10);
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение');
    }
})
