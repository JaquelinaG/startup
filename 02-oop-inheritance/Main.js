import {Movie} from './Movie.js';
import {Actor} from './Actor.js';
import {Logger} from './Logger.js';

//Clases
const terminator = new Movie('Terminator I', 1985, 60);

const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminator.addCast(actors);

terminator.on('play', function() { console.log('play captured!'); });
terminator.play();

//Mixin
var social = {
    share(friendName, movieName){
        console.log(`${friendName} shares movie: ${movieName}`)
    },
    like(friendName, movieName){
        console.log(`${friendName} likes movie: ${movieName}`)
    }
};

Object.assign(terminator, social);
terminator.share('Jaqui', `${terminator.title}`);
terminator.like('Cross', `${terminator.title}`);

//Logger
var logger = new Logger();
terminator.on('play', function() { logger.log('Playing terminator') });
terminator.play();