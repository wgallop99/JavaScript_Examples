

//String Examples
"Will_Gallop"

      //Pops up a message confirming that you are da bess
      confirm("I'm da bess!");

      //Substring is used to cut a part of the original string
      "My name is Will".substring(11, 15);

      //Using a string in an if-then statement to return a confirmation
      if ("Will".length >=4) {

           console.log("This is me");

        }else{

           console.log("This is not me");
        }

//Number Examples
1234567890

      //console.log prints out the anwer
      console.log(5 * 5);

      //prints the remainder of the divided numbers using a Modulo symbol
      console.log(253 % 46);
        //Also Math.sqrt()

      //prints out the lowest integer in the string
      Math.min(90, 100, 40, 6, 20, 55);
        //also Max.min() Math.random()

      //returns to a Whole Number
      parseInt(55.76789) = 55
      //Turns a string in to a Number
      parseFloat("200") = 200


//Boolean Examples
True-False

      //Returns a boolean of true or false
      "My name is Will".length > 10;


//Array Examples

      //Basic Example of an Array
      var fruit = ["banana", "apple", "orange", "grape"]

        //Arrays use numbers to target their components
        fruit[0] = banana

      //Concatination Example, combines arrays
      var myBoys = ["Billy", "Doug", "Trip", "John", "David"]
      var myGirls = ["Anne", "Kristen", "Catherine", "Sarah"]
      var myFriends = myBoys.concat(myGirls)
      myFriends
      ["Billy", "Doug", "Trip", "John", "David", "Anne", "Kristen", "Catherine", "Sarah"]

      //Sorting Numbers
      var myGrades = [50, 50, 60, 85, 67, 90, 50, 22, 100, 33, 45]
      myGrades.sort(function(a, b){return b-a});

      [100, 90, 85, 67, 60, 50, 50, 50, 45, 33, 22]



//Function Examples
// function myFunction(p1, p2) {
    //return p1 * p2;

    //Basic Function
    function myEquation(number) {

      var num = number / 2

      console.log(num)
      }

    //Function with two parameters
    var paraFunction = function(para1, para2){
        return para1 + para2
    }

    paraFunction(8,4)

    //Function containing an If, Then Statement
    var veg_serve = function(servs) {

      if (servs >= 5) {

        return "You are a bad boy!"

      }else{

        return "Good Boy! Have some candy."
      }
    }




//Object Examples

      //Basic Object
      var me = {
      firstName:"Will",
      lastName:"Gallop",
      age:24,
      eyeColor:"Blue",
      }
          //Ex of targeting specifc things in an Object
            me.firstName
            me["lastName"]

      //Object using the Object Constructor
      var me = new Object ()

      me.firstName = "Will"
      me["lastName"] = "Gallop"
      me.age = 24
      me["eyeColor"] = "Blue"

      me
      Object {firstName: "Will", lastName: "Gallop", age: 24, eyeColor: "Blue"}

      //Another Example of an Object being changed
      var me = {
      firstName:"Will",
      lastName:"Gallop",
      age:24,
      eyeColor:"Blue",
      }

      me.age = 24



// **NOT MY OWN WORK** Code Academy assisted Rock, Paper, Scissors Game

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (userChoice, computerChoice) {

    if (computerChoice === userChoice) {
        return "The result is a tie!"
    } else if(userChoice === "rock") {

        if (computerChoice === "scissors")
        {
            return "rock wins"

        } else {
            return "paper wins"
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "paper wins"
        } else {
            return "scissors wins"

        }

    } else {
        if (computerChoice === "rock") {
            return "rock wins"
        } else {
            return "scissors wins"
    }
}
}

compare(userChoice, computerChoice)
