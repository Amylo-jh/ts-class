class Parent {
    constructor(protected _name: string, private _age: number) {}

    public print(): void {
        console.log(`아녕하새오 이름은 ${this._name}이고, 나이는 ${this._age} 이빈다.`);
    }

    protected printName(): void {
        console.log(this._name, this._age);
    }
}

class Child extends Parent {
    protected _name = "Mark Jr.";
    private gender = 'female';

    constructor(age: number) {
        super("Mark Jr.", age);
        this.printName();
    }
}

const p = new Parent("Mark", 39);
p.print();

const c = new Child(17);
c.print();

const d = new Child(1);
d.print();