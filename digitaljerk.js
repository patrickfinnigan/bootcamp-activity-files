function Pet(name, species, type, demeanor, hungry, sleepy, bored, age) {
    this.name = name;
    this.species = species;
    this.type = type;
    this.demeanor = demeanor;
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.printStats = function() {
        console.log(this.name, this.species, this.type, this, demeanor, this.hungry, this.sleepy, this.bored, this.age)
    }

    this.feed = function() {
        if (this.hungry === true) {
            console.log("that was good food, my mans B)");
            return false;
        } else {
            console.log("nah but thank you tho B)");
        }
    }

    this.sleep = function() {
        if (this.sleepy === true) {
            console.log(`MISTER SANDMAN
            (yeeees?)
            GIVE ME A DREAM
            (bum bum bum bum)
            MAKE HIM THE CUTEST
            THAT IVE EVER SEEN
            (bum bum bum bum)`)
            return false;
        } else {
            console.log(`i want to stay up and watch power rangers you buffoon`)
        }
    }

    this.play = function () {
        if (this.bored === true) {
            console.log(`i call this move
            
            WAVE DASHING`)
            return false;
        } else {
            console.log(`IM PLAYING PERSONA 3 GO AWAAAYYYY`)
        }
    }

    this.increaseAge = function() {

    }
}

const Scrungo = new Pet("Scrungo", "Silly Sausage", "Blazing", "Doofus", true, true, true, 0);

Scrungo.printStats();