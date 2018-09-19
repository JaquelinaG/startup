export class EventEmitter{
    constructor(){      
        this.dictionary = []
    }

    on(eventName, callback){
        this.dictionary.push({eventName: eventName, callback: callback});
    }

    emit(eventName){
        this.dictionary.forEach(element => {
            if (eventName === element.eventName){
                element.callback();
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
}