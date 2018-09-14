export class EventEmitter{
    constructor(eventName, callback){
        this.eventName = eventName;
        this.callback = callback;
    }

    on(eventName, callback){


    }

    emit(eventName){

    }

    off(eventName, callback){

    }
    // The on method will receive a eventName and a callback or listener that will be executed each 
    //time a that event is triggered.

// The emit method will trigger events to be consumed by other functions or objects.

// The off method will delete previously defined event listeners.
}