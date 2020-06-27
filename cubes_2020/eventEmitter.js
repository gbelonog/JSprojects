class EventEmitter{
    constructor(){
        this.eventsList = {};
    };

    emit(eventName, eventTarget){
          if (this.eventsList[eventName]){
                this.eventsList[eventName].forEach(element => element(eventTarget));
            }
    };

    on(eventName, eventTarget){
        if (!this.eventsList[eventName]){
            this.eventsList[eventName] = [];
        }
        this.eventsList[eventName].push(eventTarget);
        console.log( 'on', this.eventsList);
    };


    off(){};
};