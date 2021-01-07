"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const sanghoone = new Human("sanghoone", 33, "male");
/*const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name} ,you age ${age} , you are a ${gender}!`
}*/
const sayHi = (person) => {
    return `Hello ${person.name} ,you age ${person.age} , you are a ${person.gender}!`;
};
sayHi(sanghoone);
//# sourceMappingURL=index.js.map