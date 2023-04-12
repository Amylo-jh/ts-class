"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`아녕하새오 이름은 ${this._name}이고, 나이는 ${this._age} 이빈다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
class Child extends Parent {
    constructor(age) {
        super("Mark Jr.", age);
        this._name = "Mark Jr.";
        this.gender = 'female';
        this.printName();
    }
}
const p = new Parent("Mark", 39);
p.print();
const c = new Child(17);
c.print();
const d = new Child(1);
d.print();
