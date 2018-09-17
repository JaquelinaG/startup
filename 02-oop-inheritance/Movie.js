// import {EventEmitter} from "./EventEmitter.js";
// import {Actor} from "./Actor.js"; 

//extends EventEmitter
class Movie {
    constructor(name, year, duration){
        this.title = name;
        this.year = year;
        this.duration = duration;   
        this.cast = [];     
    }

    // set cast(cast){
    //     this.cast = cast;
    // }

    play(){
        let actors = this.cast.map(a => a.name); 
        let actorsString = actors.join(' , ');       
        console.log(`I am playing the movie: ${this.title} with Actors: ${actors[0]}`);
        console.log(actors.length);
        console.log(actorsString.length);
    }

    pause(){
        console.log(`I am pausing the movie: ${this.title}`);
    }

    resume(){
        console.log(`I am resuming the movie: ${this.title}`);
    }

    addCast(casting){        
        casting.array.forEach(element => {this.cast.push(element)
        });
    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

//terminator.addCast(arnold);
terminator.addCast(actors);
console.log(terminator.cast);
//terminator.play();
console.log(terminator.cast[0]);


