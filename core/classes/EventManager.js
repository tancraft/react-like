/**
 * classe permettant de gerer les events en javascript
 * classe non définitive (d'autres tests a mener)
 */
export default class EventManager {
    constructor() {
        this.events = {}
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }

    emit(event, data) {
        if (!this.events[event]) return
        this.events[event].forEach(listener => listener(data))
    }
}