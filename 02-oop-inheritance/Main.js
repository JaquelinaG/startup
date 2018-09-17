// import {Movie} from './Movie.js';
// import {Actor} from './Actor.js';

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