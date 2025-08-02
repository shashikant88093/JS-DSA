class EventEmitter {
    constructor(){
        this.context =new Map()
    }
  
    subscribe(eventName, callback) {

        if(!this.context.has(eventName)){
            this.context.set(eventName,[])
        }
        const listeners = this.context.get(eventName) 
        listeners.push(callback)

        
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback)
                if(index !== -1){
                    listeners.splice(index,1)
                }
                
            }
        };
    }
    
   
    emit(eventName, args = []) {
        if(!this.context.has(eventName)){
            return []
        }
        const listeners = this.context.get(eventName)
        const results = []
        for(const listener of listeners){
            results.push(listener(...args))
        }
        return results
        
    }
}

 const emitter = new EventEmitter();

 // Subscribe to the onClick event with onClickCallback
 function onClickCallback() { return 99 }
 const sub = emitter.subscribe('onClick', onClickCallback);

 emitter.emit('onClick'); // [99]
 sub.unsubscribe(); // undefined
 emitter.emit('onClick'); // []