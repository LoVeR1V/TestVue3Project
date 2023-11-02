// Creating a map to keep track all of our events
const events = new Map();

// export default that has methods to allow us to set up events
// as well as emit
export default {
    // on method that is used to listen for events in components. 
    // It provides an alternative way to listen for events, 
    // compared to using the @ directive (short for v-on) in the component template
    $on(eventName,fn) { 
        if (!events.has(eventName)){  // check if we have a key with a the given event name
            events.set(eventName, []);
        } 
        events.get(eventName).push(fn) // push in the function that that we wanted to listen for
    },
    //something similar to revome an event
    $off(eventName, fn) {
        throw { message: 'not implemented' };
    },
    // a method that emit our event to trigger it
    $emit(eventName, data) {
        if (events.has(events)) {
            events.get(eventName).array.forEach(fn => {
                (data)
            }); // get this array and simply use forEach method to execute the function
                //passing in the data
        }
    }
}