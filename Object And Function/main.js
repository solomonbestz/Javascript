import pkg from "prompt-sync";

const prompt = pkg()

const car = {
    brain_box: true,
    whipper: true,
    seat_belt: true,
    color: null,
    engine_sound: function(){
        return 'Whoom'
    }
}

const toyota = Object.create(car)

toyota.engine_sound = 'Voooomm'
toyota.color = 'white'
console.log(toyota)

