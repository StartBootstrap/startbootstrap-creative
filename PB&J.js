/*beginning
alert("Hello reader, I'm glad that you choose your time to enter this website. Before you can read, I will like to convey you into a quick survey. If you don't feel comfortable to give out your personal details, than simply make it up as it does not affect the website or your personal life in any way. :)")
const person = {
    firstName: prompt('What is your first name?'), 
    lastName: prompt('What is your last name?'),
    age: prompt("what's you're age?") ,
    hobbies: prompt("what is your hobbies"),
    address: {
        street: prompt("What is your street?"),
        city: prompt("What is you city?"),
        state: prompt("What is your state?")
    }
}

console.log(person);

//if else
function go(fisrtName, age) {
    if (age < 15) {
        return person.firstName +' You\'re too young! But I still will accept you.';
    } else {
        return person.firstName + ' Welcome, please acknowledge that you\'re in serious business.' ;
    }
}
alert(go(person.firstName, person.age));

//function
function divide(first, second, third,fourth) {
    return 1 / 2 * 8 + 11 + ' or older only!';
}
const sum = divide(1,2,3,4);
console.log(sum);
*/
//array 
const myList = [
    {
        id: 1,
        text: 'passion',
        isCompleted: true
    },
    {
        id: 2,
        text: 'builder',
        isCompleted: true
    },
    {
        id: 3,
        text: 'joyness',
        isCompleted: true
    },
    {
        id: 3,
        text: 'failure',
        isCompleted: false
    }
]

//loops
const myListCompleted = myList.filter(function(myList) {
    return myList.isCompleted ===true;
}).map(function(myList) {
    return myList.text;
})

console.log(myListCompleted)




function openForm() {
    document.getElementById("myText").style.display = "block";
}
function closeForm() {
    document.getElementById("myText").style.display = "none";
}

function openFormB() {
    document.getElementById("myTextB").style.display = "block";
}
function closeFormB() {
    document.getElementById("myTextB").style.display = "none";
}

function openFormC() {
    document.getElementById("myTextC").style.display = "block";
}
function closeFormC() {
    document.getElementById("myTextC").style.display = "none";
}

function openFormD() {
    document.getElementById("myTextD").style.display = "block";
}
function closeFormD() {
    document.getElementById("myTextD").style.display = "none";
}

function openFormE() {
    document.getElementById("myTextE").style.display = "block";
}
function closeFormE() {
    document.getElementById("myTextE").style.display = "none";
}

function openFormF() {
    document.getElementById("myTextF").style.display = "block";
}
function closeFormF() {
    document.getElementById("myTextF").style.display = "none";
}

function openFormG() {
    document.getElementById("myTextG").style.display = "block";
}
function closeFormG() {
    document.getElementById("myTextG").style.display = "none";
}

function openFormH() {
    document.getElementById("myTextH").style.display = "block";
}
function closeFormH() {
    document.getElementById("myTextH").style.display = "none";
}

function openFormI() {
    document.getElementById("myTextI").style.display = "block";
}
function closeFormI() {
    document.getElementById("myTextI").style.display = "none";
}




