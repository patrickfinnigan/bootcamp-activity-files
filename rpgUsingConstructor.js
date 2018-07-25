function Character(name, profession, gender, age, strength, hp, lvl) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.lvl = lvl;
    this.PrintStats = function () {
        console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hp, this.lvl)
    }
    this.IsAlive = function () {
        if (this.hp > 0) {
            // console.log(this.name + " is alive and well!")
            return true;
        } else {
            // console.log(this.name + " is SO DEAD")
            return false;
        }
    }
    // "this" refers to the cahracter defined when calling the function, and "char" refers to the character placed in the parentheses
    // the "char"'s hp is subtracted from "this"'s strength
    this.attack = function (char) {
        char.hp -= this.strength
    }
    this.LevelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hp += 25;
        this.lvl += 1;
    }
}

var warrior = new Character("Gonad", "Warrior", "male", 45, 50, 80, 20);
var witch = new Character("Sarah", "Witch", "female", 23, 4, 12, 1);


warrior.PrintStats()
witch.PrintStats()


for (let i = 0; i < 10; i++) {
    witch.LevelUp();
}

console.log("-=-=-=-=-=-=-=-=-=-");

witch.PrintStats()


// a while loop
while (warrior.IsAlive() === true && witch.IsAlive() === true) {
    witch.attack(warrior);
    if (warrior.IsAlive() === false) {
        break;
    }
    warrior.PrintStats();
    warrior.attack(witch);
    if (witch.IsAlive() === false) {
        break;
    }
    witch.PrintStats();
}

// warrior.IsAlive();
// witch.IsAlive();

// you can simply add properties like this
witch.hasSpells = true;
warrior.polishedSword = "completed";
warrior.polishedSword = function () {

}
