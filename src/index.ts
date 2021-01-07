interface Human {
    name: string;
    gender: string;
    age: number;
}

const person = {
    name: 'sanghoone',
    gender: 'male',
    age: 33
}
/*const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name} ,you age ${age} , you are a ${gender}!`
}*/
const sayHi = (person: Human): string => {
    return `Hello ${person.name} ,you age ${person.age} , you are a ${person.gender}!`
}


sayHi(person);
export {}