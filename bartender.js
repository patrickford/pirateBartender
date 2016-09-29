$(document).ready(function() {
    
  //questions constructor 
  var Question = function (question, type) {
    this.question = question; 
    this.type = type; 
  };

  // question object 
  var newQuestion = new Question ("Do ye like yer drinks strong?", "strong");
  //push question into questions property of bartender 
  var saltyQuestion = new Questions ("Do ye like it with a salty tang?");
  var bitterQuestion = new Questions ("Are ye a lubber who likes it bitter?");
  var sweetQuestion = new Questions ("Would ye like a bit of sweetness with yer poision?");
  var fruityQuestion = new Questions ("Are ye one for a fruity finish?");

  var questions = new Questions ([strongQuestion.questions, saltyQuestion.questions, bitterQuestion.questions, sweetQuestion.questions, fruityQuestion.questions]);
  console.log(questions);

  var Bartender = function (question) {
    this.questions = [];
  };



  function displayQuestions () {
    var display; 
    $("#questionsDisplay").append(questions.counter); 
  };//not sure why questions need object 
  
  //ingredients constructor 
  function Ingredient (name, type) {
    this.name = name;
    this.type = type; 
  }

  //pantry constructor 
  var Pantry = function (availableItems) {
    this.availableItems = availableItems;
  };

  //ingredients object 
  var strong = new Ingredients (["Glum of rum", "slug of whisky", "splash of gin"]);
  var salty = new Ingredients (["Olive on a stick", "salt-dusted rim", "rasher of bacon"]);
  var bitter = new Ingredients (["Shake of bitters", "Splash of tonic", "twist of lemon peel"]);
  var sweet = new Ingredients (["Sugar cube", "Spoonful of honey", "Splash of cola"]);
  var fruity = new Ingredients (["Slice of orange", "Dash of cassis", "Cherry on top"]);

  //pantry ingredients object 
  var pantry = new Pantry ([strong.ingredients, salty.ingredients, bitter.ingredients, sweet.ingredients, fruity.ingredients]);
  console.log(pantry);

  //empty string for user order
  var orderValue = [];

  //constructor for ingredients 
  var Order = function (orderValue) {
    this.strong = orderValue[0];
    this.salty = orderValue[1];
    this.bitter = orderValue[2];
    this.sweet = orderValue[3]; 
    this.fruity = orderValue[4];
  }//TODO: need to clarify this w/mentor 

  //function to generate random number to pull randomly from ingredients array 
  var GenerateRandomNumber = function (max) {
    //math.floor makes sure integer is rounded down 
    return Math.floor(Math.random() * max);  
  };

  //function to display questions array for user to choose from 
  displayQuestions();

  //handle sumbit event & push values into orderValue array 
  $("#orderOptions").submit(function(e){
    e.preventDefault();
    //grab user order values and push to orderValue array 
    $("select").each(function() {
      if ($(this).val() == "yes") {
        orderValue.push(true);
      } 
      else {
        orderValue.push(false);
      }
      GenerateRandomNumber(0, 2);
    })
    console.log(orderValue);
  })
});//TODO:  
//have bartender create order 
//push results to a div 
