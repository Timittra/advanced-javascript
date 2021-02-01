const students = [
    {id: 12, name: "Hridi"},
    {id: 22, name: "Shashi"},
    {id: 32, name: "Duti"},
    {id: 52, name: "Mahin"}
];
// const namesCollection = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = element.name;
//     namesCollection.push(names);
// }

// console.log(namesCollection);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const biggerOne = students.find(s => s.id>30);

console.log(biggerOne);
console.log(bigger);
console.log(ids);
console.log(names);