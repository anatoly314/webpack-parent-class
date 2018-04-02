class Parent {
    constructor() {
        if (this.constructor.name === 'Parent'){
            throw new TypeError("Parent class is abstract - cant be instance");
        }
    }

}


module.exports = Parent;