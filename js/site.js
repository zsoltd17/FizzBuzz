// Get elements from page
const btnRun = document.querySelector('#btnSubmit');
const results = document.querySelector("#results");
const template = document.querySelector('#fbTemplate');

// Get Values from page
function getValue() {
    let n1 = document.querySelector('#inputNumber1').value;
    let n2 = document.querySelector('#inputNumber2').value;

    n1 = parseInt(n1);
    n2 = parseInt(n2);
    
    // Validate
    if (Number.isInteger(n1) && Number.isInteger(n2)) {
        let numbersArray = fizzBuzz(n1, n2);
    
        displayNumbers(numbersArray);
    } else {
        alert("Please input numbers only!");
    }

}

// Generate numbers
// function generateNumbers(n1, n2) {
//     let numbers = [];

//     for (let i = 1; i <= 100; i++) {
//         if (i % n2 == 0 && i % n1 == 0) {
//             numbers.push("FizzBuzz");
//         } else if (i % n2 == 0) {
//             numbers.push("Buzz");
//         } else if (i % n1 == 0) {
//             numbers.push("Fizz");
//         } else {
//             numbers.push(i);
//         }
//     }

//     return numbers;
// }


// function fizzBuzz(n1, n2) {
//     let numbers = [];
//     let Fizz = false;
//     let Buzz = false;

//     for (let i = 1; i <= 100; i++) {
//         Fizz = i % n1 == 0;
//         Buzz = i % n2 == 0;

//         switch (true) {
//             case Fizz && Buzz: {
//                 numbers.push("FizzBuzz");
//                 break;
//             }
//             case Fizz: {
//                 numbers.push("Fizz");
//                 break;
//             }
//             case Buzz: {
//                 numbers.push("Buzz");
//                 break;
//             }
//             default: {
//                 numbers.push(i);
//                 break;
//             }
//         }
//     }

//     return numbers;
// }

function fizzBuzz(n1, n2) {
    let numbers = []

    for (let i = 1; i <= 100; i++) {
        let value = ((i%n1 == 0 ? 'Fizz' : '') + (i % n2 == 0 ? 'Buzz' : '') || i);
        numbers.push(value);
    }

    return numbers;
}

// Display table
function displayNumbers(numArr) {
    
    results.innerHTML = "";

    for (let i = 0; i < numArr.length; i+=5) {
        let tableRow = document.importNode(template.content, true);

        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(numArr[i]);
        rowCols[0].textContent = numArr[i];
        rowCols[1].classList.add(numArr[i + 1]);
        rowCols[1].textContent = numArr[i + 1];
        rowCols[2].classList.add(numArr[i + 2]);
        rowCols[2].textContent = numArr[i + 2];
        rowCols[3].classList.add(numArr[i + 3]);
        rowCols[3].textContent = numArr[i + 3];
        rowCols[4].classList.add(numArr[i + 4]);
        rowCols[4].textContent = numArr[i + 4];

        results.appendChild(tableRow);
    }

}

btnRun.addEventListener('click', getValue);