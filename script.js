function Account(login, email) {
    this.login = login;
    this.email = email;   
}

Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const account1 = new Account('user1', 'user1@example.com');
const account2 = new Account('user2', 'user2@example.com');

account1.getInfo();
account2.getInfo(); 

class User {
    constructor(name, age, followers){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }

}
const user1 = new User('Illia', 14, 200);
console.log(user1.getInfo());


class Storage {
    constructor(items){
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(currentItem => currentItem !== item);
    }
}
const storage = new Storage(['telefonchik', 'klaviatura', 'monitorchik']);
console.log(storage.getItems());
storage.addItem('dzhoystik');
console.log(storage.getItems());
storage.removeItem('monitorchik');
console.log(storage.getItems());


class StringBuilder {
    constructor(value){
        this._value = value;
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value += str;
    }
    prepend(str) {
        this._value = str + this._value;
    }
    pad(str) {
        this._value = str + this._value + str;
    }
}
const builder = new StringBuilder('.');
console.log(builder.value);
builder.append('*');
console.log(builder.value);
builder.prepend('^');
console.log(builder.value);
builder.pad('-');
console.log(builder.value);


class Car {
    constructor({maxSpeed, price}) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`)
    }
    get price() {
        return this._price;``
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        if (this.speed + value <= this.maxSpeed){
            this.speed += value;
        } else {
            this.speed = this.maxSpeed
        }
    }
    decelerate(value) {
        if (this.speed - value >= 0){
            this.speed -= value;
        } else {
            this.speed = this.maxSpeed
        }
    }
    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
        }
    }
}
const mustang = new Car({maxSpeed: 200, price: 2000});
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);

console.log(mustang.price);
