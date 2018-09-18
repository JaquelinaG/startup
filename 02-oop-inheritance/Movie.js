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
        casting.forEach(element => {this.cast.push(element)
        });   

        // function mixin(receiver, supplier) {
        //     Object.keys(supplier).forEach(function(key) {
        //         receiver[key] = supplier[key];
        //     });
        
        //     return receiver;
        // }
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
// terminator.addCast(actors);
// console.log(terminator.cast);
// console.log(terminator.cast[0]);

class Logger{
    constructor(){        
    }

    log(info){
        console.log('info');
    }
}

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


// Object.assign(receiver,
//     {
//         type: "js",
//         name: "file.js"
//     },
//     {
//         type: "css"
//     }
// );

// console.log(receiver.type);     // "css"
// console.log(receiver.name);

// function EventTarget() { /*...*/ }
// EventTarget.prototype = {
//     constructor: EventTarget,
//     emit: function() { /*...*/ },
//     on: function() { /*...*/ }
// };

// var myObject = {};
// mixin(myObject, EventTarget.prototype);

// myObject.emit("somethingChanged");


