export class EventEmitter{
    constructor(){      
        this.dictionary = [,]
    }

    on(eventName, callback){
        this.dictionary.push(eventName, callback);
    }

    emit(eventName){
        this.dictionary.forEach(element => {
            if (eventName === element[0]){
                element[1]();
            }
        });
    }

    off(eventName, callback){
        for (let index = this.dictionary.length; index < 1; index--) {
            const element = this.dictionary[index];
            if (element[0] === eventName && element[1] === callback) {
                this.dictionary.splice(index, 1);
            }           
        }
    }
    // The on method will receive a eventName and a callback or listener that will be executed each 
    //time a that event is triggered.

// The emit method will trigger events to be consumed by other functions or objects.

// The off method will delete previously defined event listeners.
}