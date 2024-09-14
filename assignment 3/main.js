//Guessing Game
//Allows a random number from 1-10 to be selected
let m= Math.floor(Math.random()* 10) +1

//Prompt allows user to type a number
let j= prompt('A number was just generated. Try to guess it! Enter a number between 1-10.')

//If the user guesses the number right an alert pops up to tell them so
if (m==j) {
    alert('You guessed the number! The number was '+m )
}

/*The While loop prompts the user to keep guessing if they guess the wrong number. When they end up 
guessing the correct number there is an alert to inform them that they guesed the correct number*/
while (j != m) {
    var g= prompt('Your guess did not match. Try again!');
    if (g==m) {
        alert('You guessed the number! The number was ' +m);
        console.log(m)
        break;
    }
}




//Password Validator
//pw gives a prompt so that the user can set a password
let pw= prompt('Set a password')

//pw2 gives another prompt so that the user can re-enter the password
let pw2= prompt('Re-enter the password')

//if pw matches pw2 there is an alert to inform the user that the password was successfully saved
if (pw==pw2) {
    alert('Password saved successfully.')
    console.log(pw2)
}

/*The While loop allows the user to retype the password if they do not match. Once the passwords match there is
an alert that tells the user the password was saved successfully.*/
while (pw2 != pw) {
    var invalid= prompt('Passwords do not match. Please re-enter the password.');
    if (invalid==pw) {
        alert('Password saved successfully.');
        console.log(pw)
        break;
    }
}




//Multiplication Table Generator
//p holds a prompt that allows the user to enter a number they want to multiply
let p= prompt('Enter a number you want multiplied');

//n holds p, which is then able to be insterted into the console log and be multiplied
let n = p

//1 is the counter, 10 is the condition, and i is the iterator
for (let i = 1; i <= 10; ++i)

//console log will show the multiplication table
    console.log(n + " * " + i +
        " = " + n * i);




//Grade Evaluator
//This allows the user to enter a number between 0-100
let num = Number(prompt("Enter your number grade (0-100) to find your letter grade."));

//the if statement tells the program that the number must be between 90 and 100 to be an A
if (num >=90 && num <= 100) {
    console.log("A");
}

//else if statements give the other numbers and letter grades
else if (num >=80 && num <= 89) {
    console.log("B");
}
else if(num >=70 && num <=79) {
    console.log("C");
}
else if (num >=60 && num <=69) {
    console.log("D");
}
else if(num < 60) {
    console.log("F");
}

//tells the program that if the number is more than 100 then the input is invalid
else if(num > 100) {
    console.log("Invalid Input");
}




//Day Finder
//Allows the user to enter a number between 1-7
let choice = prompt('Select a number from 1-7 to correlate to a day of the week.');

//The switch takes the number that is typed and correlates it with the correct case
switch (choice){

//The case hold the days and the console.log to ensure that it is logged. It also has a break to end the case
case '1':
    console.log('Sunday');
    break;
case '2':
    console.log('Monday');
    break;
case '3':
     console.log('Tuesday');
     break;
case '4':
    console.log('Wednesday');
    break;
case '5':
    console.log('Thursday');
    break;
case '6':
    console.log('Friday');
    break;
case '7':
    console.log('Saturday');
    break;
default:
    console.log("");
}

//tells the program that if the number typed is more than 7 then it is invalid
if (choice > 7) {
    console.log("Invalid Input");
}