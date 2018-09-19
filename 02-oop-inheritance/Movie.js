import {EventEmitter} from "./EventEmitter.js";

export class Movie extends EventEmitter {
    constructor(name, year, duration) {
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;   
        this.cast = [];     
    }

    play(){
        let actors = this.cast.map(a => a.name); 
        let actorsString = actors.join(', ');       
        console.log(`I am playing the movie: ${this.title} with Actors: ${actorsString}`);
        this.emit('play');
    }

    pause(){
        console.log(`I am pausing the movie: ${this.title}`);
        this.emit('pause');
    }

    resume(){
        console.log(`I am resuming the movie: ${this.title}`);
        this.emit('resume');
    }

    addCast(casting){              
        casting.forEach(element => {this.cast.push(element)
        });   
    }
}