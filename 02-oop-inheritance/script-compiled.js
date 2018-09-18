export class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
export class EventEmitter {
  constructor() {
    this.dictionary = [];
  }

  on(eventName, callback) {
    this.dictionary.push({
      eventName: eventName,
      callback: callback
    });
  }

  emit(eventName) {
    this.dictionary.forEach(element => {
      if (eventName === element.eventName) {
        element.callback();
      }
    });
  }

  off(eventName, callback) {
    for (let index = this.dictionary.length; index < 1; index--) {
      const element = this.dictionary[index];

      if (element[0] === eventName && element[1] === callback) {
        this.dictionary.splice(index, 1);
      }
    }
  }

}
export class Logger {
  constructor() {}

  log(info) {
    console.log(`${info}`);
  }

}
import { Movie } from './Movie.js';
import { Actor } from './Actor.js';
import { Logger } from './Logger.js'; //Clases

const terminator = new Movie('Terminator I', 1985, 60);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
terminator.addCast(actors);
terminator.on('play', function () {
  console.log('play captured!');
});
terminator.play(); //Mixin

var social = {
  share(friendName, movieName) {
    console.log(`${friendName} shares movie: ${movieName}`);
  },

  like(friendName, movieName) {
    console.log(`${friendName} likes movie: ${movieName}`);
  }

};
Object.assign(terminator, social);
terminator.share('Jaqui', `${terminator.title}`);
terminator.like('Cross', `${terminator.title}`); //Logger

var logger = new Logger();
terminator.on('play', function () {
  logger.log('Playing terminator');
});
terminator.play();
import { EventEmitter } from "./EventEmitter.js";
export class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    let actors = this.cast.map(a => a.name);
    let actorsString = actors.join(', ');
    console.log(`I am playing the movie: ${this.title} with Actors: ${actorsString}`);
    this.emit('play');
  }

  pause() {
    console.log(`I am pausing the movie: ${this.title}`);
    this.emit('pause');
  }

  resume() {
    console.log(`I am resuming the movie: ${this.title}`);
    this.emit('resume');
  }

  addCast(casting) {
    casting.forEach(element => {
      this.cast.push(element);
    });
  }

}
import { Movie } from './movie.js';
import { Actor } from './movie.js'; // var movie1 = new Movie('Hola', 2015, 125);
// movie1.play();

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)]; //terminator.addCast(arnold);

terminator.addCast(actors);
console.log(terminator.cast); //terminator.play();

console.log(terminator.cast[0]);
