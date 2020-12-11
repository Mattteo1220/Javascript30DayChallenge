const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

function checkAge(person){
    return (new Date().getFullYear() - person.year) >= 18;
}

function checkComment(comment){
    if(comment.id === 823423){
        return comment;
    }
}

let isAdult = people.some(checkAge);
console.log({isAdult});

let allAdults = people.every(checkAge);
console.log({allAdults});

let result = comments.find(checkComment);
console.log({result});

let itemResult = comments.findIndex(checkComment);
delete comments[itemResult];
console.log(comments);
