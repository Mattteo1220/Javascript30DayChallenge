// let numOfFizz = 0;
// let numOfBuzz = 0;
// let numOfFizzBuzz = 0;
// for(i = 1; i <= 100; i++)
// {
//     let result = "";
    
//     if(i % 3 == 0)
//     {
//         result += "Fizz";
//         numOfFizz++;
//     }
//     if(i % 5 == 0)
//     {
//         result += "Buzz";
//         numOfBuzz++;
//     }
//     if(result === "FizzBuzz")
//     {
//         numOfFizzBuzz++;
//     }
//     if(result.length == 0)
//     {
//         result = i.toString();
//     }
//     console.log(result);
// }

// console.log("# of FizzBuzz: " + numOfFizzBuzz);
// console.log("# of Fizz: " + numOfFizz);
// console.log("# of Buzz: " + numOfBuzz);


////////Day Ten code///////////////////
let lastChecked;
function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked)
            {
                inBetween = !inBetween;
                console.log("starting checking...");
            }

            if(inBetween)
            {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

let checkboxes = document.querySelectorAll("#inbox input[type='checkbox']");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});



