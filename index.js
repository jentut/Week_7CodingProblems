//alert("It's working");
console.log("Week 7: Coding Assignment");

//Question #1A: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
console.log("Question 1A:");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

//Question #1B: Add a new age to your array and reapeat the step above to resure it is dynamic.
console.log("Question 1B:");

ages.push(35);
console.log(ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

//Question #1C: Use a loop to iterate through the array and calculate the average age.
console.log("Question 1C: ");

let sumOfAges = 0;

for (i = 0; i < ages.length; i++);{
    sumOfAges += ages[i];
    console.log("index: ", i, "sumOfAges: ", sumOfAges);
}
console.log("Total Sum: ", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average: ", average);

/*Question 2A: Create an array called names that contains the following values: 
"Sam", "Tommy", "Tim", "Sally", "Buck", "Bob" .  Use a loop to 
iterate through the array and calculate the average number of letters per name.*/

console.log("Question 2A: ");

names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
/*learned .join('') will take out all the commas where the .join() 
looks at all the characters not just the letters.  Realized I didn't use 
a loop.*/
let avg = names.join('').length / names.length;
console.log("The average number of letters in the array 'names': ", avg);

/*Here is how the assignment video solved Question 2A.  
Both ways worked the same way.*/
let totalChars = 0;

for (i = 0; i < names.length; i++){
    totalChars += names[i].length;
    console.log("Index: ", i, "Name: ", names[i], "totalChars: ", 
    totalChars);
}
let averageName = totalChars / names.length;
console.log ("Average of Names: ", averageName);

/*Use a loop to iterate throught the array again and concatenate all 
the names together,separated by spaces, and print the results to the 
console.*/
console.log("Question 2B: ");
let concatNames = "";

for (i = 0; i < names.length; i++) {
    //console.log(i, "test");
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "Names concatenated ", concatNames);
}
//Question 3: How do you access the last element of any array?
console.log("Question 3:");
console.log("Last element of the Names Array: ", names[names.length - 1])

//Questions 4: How do you access the first element of any array?
console.log("Question 4:");
console.log("The first element in the Names Array: ", names[0]);

/*Question 5: Create a new array called nameLengths.  Write a loop to 
iterate over the previously created names array and add the
length of each name to the nameLengths array.*/
console.log("Question 5:");
let namesLengths = [];

for (i = 0; i < names.length; i++ ) {
    namesLengths.push(names[i].length);
    console.log("Names length array: ", namesLengths);
}


/*Question 6:  Write a loop to iterate over the nameLengths
 array and calulate the sum of all the elements in the array.*/
 console.log("Question 6:");

let charsTotal = 0;
for (i = 0; i< namesLengths.length; i++){
    //console.log(i, "test");
    charsTotal+= namesLengths[i];
    console.log("charsTotal: ", charsTotal);
}


 /*Question 7: Write a function that takes two parameters, word and n,
 as arguements adn returns the word concatenated to itself n number of 
 times.*/
 console.log("Question 7: ");

function combiningThings(word, n){
    /*I was trying to do this with math but using the method was a much 
    better way*/
    let concat = word.repeat(n);
    return concat;
}
console.log(combiningThings("Hello", 5));


 /*Questions 8: Write a fuction that take two parameters, firstName and 
 lastName, and returns a full name.  The full name should be the first 
 and the last name separated by a space*/
console.log("Question 8:");

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullname;
}
console.log("Jen","Tuttle");


/*Question 9: Write a function that takes an array of numbers and returns 
true if the sum of all the numbers in the array is greater than 100.*/
console.log("Question 9: ");

let array1 = [100,200,300,400];
let array2 = [2,3,4,25];

function sumArray(array){
    let total= 0;

    for (i=0; i< array.length; i++){
        total += array[i];
        console.log("Total: ", total);
    }
    if (total > 100){
        /*tried to console log after the return however, I learned, it didn't 
        recognize it was there.It just gave the total but not the true or
        false*/
        console.log("Total: ", total, true);
        return true;
        //console.log("Total: ", total, true);
    } else {
        console.log("Total:", false);
        return false;
        //console.log("Total:", false);
    }
}
sumArray(array1);


/*Question 10: Write a fuction that take an array of numbers 
and returns the average of all the elements in the array.*/
console.log("Question 10: ");

function calculateAverage(array){
    let total = 0;

    for (i=0; i < array.length; i++){
    //console.log(i, "test");
    total += array[i];
    }

    let average = total/array.length;
    console.log ("Average of numbers in the array:", average);
    return average;
}

calculateAverage(array2);


/*Question 11: Write a function that takes two arrays of numbers 
and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array.*/
console.log("Question 11: ");

let numbers1 = [100,100,50];
let numbers2 = [100,100,3];

function twoAverages(thing1, thing2){
    console.log("Parameters: ", thing1, thing2);
    let total1 = 0;
    let total2 = 0;
    for (const number of thing1){
        total1 += number;
        console.log("Current number: ", number, "Total1: ", total1);
    }

    for (const number of thing2){
        total2 += number;
        console.log("Current number loop2: ", number, "Total2: ", total2);
    }
let average1 = total1 / thing1.length;
let average2 = total2 / thing2.length;
console.log ("Averages:", average1, average2);

if (average1 > average2){
    console.log(true);
    return true;
}else if(average1 < average2){
     console.log(false);
     return false;
}else {
    console.log("Numbers are equal");
}
}
twoAverages(numbers1, numbers2);

/*Question 12: Write a function called willBuyDrink that takes a
 boolean isHotOutside, and a number moneyInPocket, and returns true 
 if it is hot outside and if moneyInPocket is greater than 10.50.*/
console.log("Question 12: ");

function willBuyDrink (isHotOutside, moneyInPocket){
    console.log("Parameter:" , isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.50;
    console.log("Buy a drink?", buyDrink);
    return buyDrink;

}
willBuyDrink(false, 10.51);

/*Create a function of your own that solves/n a problem. 
In comments, write what the function does and why you created it*/

/*I had chatGPT come up with a problem for me to solve and here is what the problem is:
You have a list of numbers representing the scores of different students in a 
class.  Your task is to write a function that finds the average scores and identifies
how many students scorec above the average.*/


console.log("Question 13: ");

let scores = [70, 85, 60, 90, 80, 63, 100];

function aboveAverage(scores) {
    let total = 0;

    // Calculate the sum of all scores
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
        console.log("The total number of test taken: ", scores.length);
    }

    // Calculate the average score
    //found a new method to use to round the decimal point so it wasn't too long
    let average = total / scores.length;
    console.log("The average is: ", average.toFixed(2));

    // Count how many scores are above the average
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > average) {
            count++;
        }
    }
    return count;
}

console.log("The number of scores above average: ", aboveAverage(scores));

