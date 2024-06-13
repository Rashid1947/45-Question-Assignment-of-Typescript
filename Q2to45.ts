//Q2
//Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple, 
//such as, “Hello Eric, would you like to learn some Python today?”
let name="Hello Eric"
let message="would you like to learn some Python today?"
console.log(`${name}, ${message} `)

//Q3
//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and title case.

let personName="Rashid"
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

//Q4
//Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author.

let famousPerson="Albert Einstein"
let famousQuote="“A person who never made a mistake never tried anything new.”"
console.log(`${famousPerson}  Once said, ${famousQuote}`)

//Q5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
//in a variable called famous_person. Then compose your message and store 
//it in a new variable called message. Print your message.

let famousPerson2="Albert Einstein"
let famousQuote2="“A person who never made a mistake never tried anything new.”"
let message2=`${famousPerson2}  Once said, ${famousQuote2}`
console.log(message2)

//Q6
//Stripping Names: Store a person’s name, and include some whitespace characters 
//at the beginning and end of the name. Make sure you use each character combination,
// "\t" and "\n", at least once. Print the name once, so the whitespace around the 
//name is displayed. Then print the name after striping the white spaces.

let personName2="\n\t Billal \t\n"
console.log(personName2.trim())
console.log(personName2)

//Q7 & Q8
//Number Eight: Write addition, subtraction, multiplication, and division
// operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

console.log(2+6)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//Q9
//Favorite Number: Store your favorite number in a variable. Then, using that 
//variable, create a message that reveals your favorite number. Print that message.
let favNum= 16

console.log(`My favorite number is ${favNum}`)

//Q10
//Adding Comments: Choose two of the programs you’ve written, and add at least 
//one comment to each. If you don’t have anything specific to write because your 
//programs are too simple at this point, just add your name and the current 
//date at the top of each program file. Then write one sentence describing what the program does.

//first Program
// Rashid Ali
//26-02-2024
//in this program I write my assignment name
console.log(`45 Question Assignment`)

//second Program
//Rashid Ali
 //26-02-2024   
 //in this program I write my class timing
 console.log(`my class timing is 7pm to 10pm at governor house`)

//Q11
//Names: Store the names of a few of your friends in 
//a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myFriends=["Fatima", "Zainab", "Samrah"]
for(let i=0; i<myFriends.length; i++)
console.log(myFriends[i])

//Q12
//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

let message="I miss you Buddy."
for(let i=0; i<myFriends.length; i++)
    console.log(`Dear, ${myFriends[1]}  ${message}`)

//Q13
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make
// a list that stores several examples. Use your list to print a series of statements about these
// items, such as “I would like to own a Honda motorcycle.”


let favTrans:string[]=["Revo", "fortuner", "Vigo" ]
let message1="i will buy it soon "

for(let i=0;i<favTrans.length;i++)
{ console.log(message1 + favTrans[i]);}

//Q14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guestList =["soniya", "sadaf", "samira"]
for(let i=0; i<guestList.length; i++)
console.log(`Dear ${guestList[i]} , you are cordially invited to dinner.`)

// //Q15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let unableToAttend ="Sadaf"
console.log(`${unableToAttend} can't make it to dinner`)
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList[1] = "Jugnu"
// Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach(guestList=>{console.log(`Dear ${guestList}, Join us for dinner and good vibes tonight!`)})

//Q16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestlist: string[] = ["Jugnu","Zainab"]
console.log(guestlist)
console.log(`Great News! I have a bigger table for dinner`)

//  Add one new guest to the beginning of your array.
guestlist.unshift("Samrah")
console.log(guestlist)
// Add one new guest to the middle of your array.
guestlist.splice(guestlist.length / 2,0, "sadaf")
console.log(guestlist)
// • Use append() to add one new guest to the end of your list.
guestlist.push("soniya")
console.log(guestlist)
// Print a new set of invitation messages, one for each person in your list.
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist}, would you like to join me for dinner`)})

//Q17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// * Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`Unfortunately, i can invite only two people for dinners`)
// * Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestlist.length > 2) {let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);}
// * Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist} you're still invited to dinner.`);})
// * Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.splice(0, guestlist.length);
console.log(guestlist)

// Q18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// * Store the locations in a array. Make sure the array is not in alphabetical order.
let Places: string[] = ["najaf", "Madina", "Karbala", "makkah"]
// * Print your array in its original order.
console.log("Original Order:", Places)
// * Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatic Order:", [...Places].sort())
// * Show that your array is still in its original order by printing it.
console.log("Original Order:", Places)
// * Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabatic Order:", [...Places].sort().reverse())
// * Show that your array is still in its original order by printing it again.
console.log("Original Order:", Places)
// * Reverse the order of your list. Print the array to show that its order has changed.
Places.reverse()
console.log(Places)
// * Reverse the order of your list again. Print the list to show it’s back to its original order.
Places.reverse()
console.log(Places)
// * Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Places.sort()
console.log(Places)
// * Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
Places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", Places);

//Q20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains: string[] = ["Everest", "K2", "Kangchenjunga"];

mountains.forEach(mountain => console.log(mountain));

// Q21
// Example TypeScript Object structure
let person = {
    first_name: "Mehak",
    last_name: "Hamid",
    age: 25,
    city: "Karachi"}
console.log(person);

// Q22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let names: string[] = ["Alice", "Bob", "Charlie"];

    console.log(names[3]);
    console.log("IndexError: list index out of range");
    console.log(names[2]);
//Q23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // false

let age = 25;

console.log("Is age > 20? I predict True.");
console.log(age > 20); // true

console.log("Is age < 20? I predict False.");
console.log(age < 20); // false

console.log("Is age == 25? I predict True.");
console.log(age == 25); // true

console.log("Is age != 25? I predict False.");
console.log(age != 25); // false

console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // true

console.log("Is age <= 18? I predict False.");
console.log(age <= 18); // false

let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // true

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // false

console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); // true

console.log("Is fruit.toLowerCase() == 'APPLE'? I predict False.");
console.log(fruit.toLowerCase() == 'APPLE'); // false

//Q24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings
let city = 'New York';
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // true

console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles'); // true

console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // false

console.log("Is city != 'New York'? I predict False.");
console.log(city != 'New York'); // false
// * Tests using the lower case function
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // true

console.log("Is city.toLowerCase() == 'NEW YORK'? I predict False.");
console.log(city.toLowerCase() == 'NEW YORK'); // false
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 10;

console.log("Is num == 10? I predict True.");
console.log(num == 10); // true

console.log("Is num != 5? I predict True.");
console.log(num != 5); // true

console.log("Is num > 5? I predict True.");
console.log(num > 5); // true

console.log("Is num < 20? I predict True.");
console.log(num < 20); // true

console.log("Is num >= 10? I predict True.");
console.log(num >= 10); // true

console.log("Is num <= 5? I predict False.");
console.log(num <= 5); // false

console.log("Is num < 10? I predict False.");
console.log(num < 10); // false
// * Tests using "and" and "or" operators
console.log("Is num > 5 && num < 15? I predict True.");
console.log(num > 5 && num < 15); // true

console.log("Is num < 5 || num > 15? I predict False.");
console.log(num < 5 || num > 15); // false
// * Test whether an item is in a array

let fruits = ['apple', 'banana', 'cherry'];

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // true

console.log("Is 'grape' in fruits? I predict False.");
// * Test whether an item is not in a array

console.log(fruits.includes('grape')); // false
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // true

console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana')); // false


//Q25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// * Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = 'green';

if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
// * Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

alien_color = 'red';

if (alien_color == 'green') {
    // No output
}
//Q26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// * If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// * If the alien’s color isn’t green, print a statement that the player just earned 10 points.

alien_color = 'green';
if (alien_color == 'green') {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points!");
}

// * Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'yellow';

if (alien_color == 'green') {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points!");
}

//Q27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * Write three versions of this program, making sure each message is printed for the appropriate color alien.
// * If the alien is green, print a message that the player earned 5 points.
alien_color = 'green';

if (alien_color == 'green') {
    console.log("You earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}
// * If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'yellow';

if (alien_color == 'green') {
    console.log("You earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}
// * If the alien is red, print a message that the player earned 15 points.
alien_color = 'red';

if (alien_color == 'green') {
    console.log("You earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}

//Q28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}
// //Q29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// * Make a array of your three favorite fruits and call it favorite_fruits.
// * Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['mango', 'apple', 'banana'];

if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}

if (favorite_fruits.includes('cherry')) {
    console.log("You really like cherries!");
}
// //Q30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// * If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// * Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ['admin', 'john', 'eric', 'alice', 'bob'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//Q31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// * If the list is empty, print the message We need to find some users!

// * Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//Q32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// * Make a list of five or more usernames called current_users.
let current_users = ['john', 'eric', 'alice', 'bob', 'mike'];

// * Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['eric', 'MIKE', 'susan', 'george', 'anna'];

// * Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already in use, please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
//Q33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// * Store the numbers 1 through 9 in a array.
// * Loop through the array.
// * Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
//Q34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// * Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// * Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas = ['pepperoni', 'margherita', 'bbq chicken'];

for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

//Q35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ['dog', 'cat', 'rabbit'];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//Q36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

make_shirt('large', 'I love TypeScript!');

//Q37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size: string = 'large', message: string = 'I love TypeScript!'){
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

make_shirt1(); // Large shirt with default message
make_shirt1('medium'); // Medium shirt with default message
make_shirt1('small', 'JavaScript is cool!'); // Small shirt with a different message

//Q38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = 'USA'){
    console.log(`${city} is in ${country}.`);
}

describe_city('New York');
describe_city('Los Angeles');
describe_city('London', 'UK');

//Q39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country('New York', 'USA'));
console.log(city_country('London', 'UK'));
console.log(city_country('Tokyo', 'Japan'));

//Q40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: string, title: string, tracks?: number): object {
    let album: { artist: string; title: string; tracks?: number } = { artist: artist, title: title };
    if (tracks!== undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album('Taylor Swift', '1989'));
console.log(make_album('Adele', '25', 11));
console.log(make_album('Drake', 'Scorpion', 25));

//41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ['David Copperfield', 'Dynamo', 'David Blaine'];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
//Q 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//Q43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians: string[]): string[] {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

magicians = ['David Copperfield', 'Dynamo', 'David Blaine'];
let great_magicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(great_magicians);

//Q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!");
}

make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');


//Q45  
// function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
        let car = { manufacturer: manufacturer, model: model };
        for (let option of options) {
            Object.assign(car, option);
        }
        return car;
    }
    
    console.log(car_info('Toyota', 'Corolla', { color: 'blue', year: 2020 }, { sunroof: true }));
    

