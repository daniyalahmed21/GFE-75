export default class EventEmitter {
    eventList = Object.create(null);
  
    on(eventName, listener) {
      if (!this.eventList[eventName]) {
        this.eventList[eventName] = [];
      }
      this.eventList[eventName].push(listener);
      return this;
    }
  
    off(eventName, listener) {
      const listeners = this.eventList[eventName];
      if (!Array.isArray(listeners)) return this;
  
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1); // remove only the first match
      }
  
      if (listeners.length === 0) {
        delete this.eventList[eventName];
      }
  
      return this;
    }
  
    emit(eventName, ...args) {
      const listeners = this.eventList[eventName];
      if (!Array.isArray(listeners) || listeners.length === 0) return false;
  
      // copy array in case listeners are modified during emit
      [...listeners].forEach((listener) => listener(...args));
      return true;
    }
  }
  