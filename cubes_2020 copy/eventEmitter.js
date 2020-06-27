class EventEmitter{
    constructor(){
        this.eventsList = {};
    };

    emit(eventName, eventTarget){
        
           // console.log('emit_eventTarget',eventTarget.x);

            if (this.eventsList[eventName]){
                //this.eventsList[eventName].forEach(element => element(eventTarget));
                this.eventsList[eventName].forEach(element => element(eventTarget));
            }

            //console.log('eventList', this.eventsList);
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