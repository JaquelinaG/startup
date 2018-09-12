class Movie{
    constructor(name, year, duration){
        this.title = name;
        this.year = year;
        this.duration = duration;
    }

    play(){
        console.log(`I am playing the movie: ${this.title}`);
    }

    pause(){
        console.log(`I am pausing the movie: ${this.title}`);
    }

    resumen(){
        console.log(`I am resuming the movie: ${this.title}`);
    }
}


var movie1 = new Movie('Hola', 2015, 125);
movie1.play();