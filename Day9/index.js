const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

console.warn("Hello I am a warning");

console.error("Hello I am an Error");

console.info("Hello I am informational");

console.assert(1 === 1, "That is wrong");

console.clear();

console.log(document.querySelector("#p-lineBreak"));
console.dir(document.querySelector("#p-lineBreak"));


dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('Wes');

console.time('fetching data');
fetch("https://api.github.com/users/mattteo1220").then(data => data.json()).then(data => {
    console.timeEnd("fetching data");
    console.log(data);
});

console.table(dogs);