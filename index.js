class myClass {
    getPrice() {
        return 33;
    }
    constructor() {
        console.log(`My First Class`);
    }
}

let p = new myClass();

console.log(p.getPrice());