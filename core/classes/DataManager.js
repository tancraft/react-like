/**
 * classe permettant de gerer les datas en javascript
 * classe non définitive (d'autres tests a mener)
 */
export default class DataManager {
    constructor(initialData = {}) {

        this.data = initialData
        this.listeners = []
        
    }

    set(key, value) {
        this.data[key] = value
        this.notify()
    }

    get(key) {
        return this.data[key]
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notify() {
        this.listeners.forEach(listener => listener(this.data))
    }
}