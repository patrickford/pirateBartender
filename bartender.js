$(document).ready(function() {

  //<--define constructors and objects--> 

  //questions constructor 
  var Question = function (question, type) {
    this.question = question; 
    this.type = type; 
  };

  //ingredients constructor 
  var Ingredient = function (name, type) {
    this.name = name;
    this.type = type; 
  };

  //pantry constructor 
  var Pantry = function (ingredient, type) {
    this.ingredient = ingredient; 
    this.type = type; 
  };

  //bartender constructor 
  var Bartender = function (question) {
    this.questions = questions; 
  };

  //questions, ingredient, & pantry arrays  
  questions = []; 
  ingredients = [];
  pantry = [];

  //building question object array  
  questions.push(new Question ("Do ye like yer drinks strong?", "strong"));
  questions.push(new Question ("Do ye like it with a salty tang?", "salty"));
  questions.push(new Question ("Are ye a lubber who likes it bitter?", "bitter"));
  questions.push(new Question ("Would ye like a bit of sweetness with yer poision?", "sweet"));
  questions.push(new Question ("Are ye one for a fruity finish?", "fruity"));

  console.log(questions);
  console.log(typeof Bartender);//shows what type of thing this is for clarification 

  //building ingredients object<--strong ingredients--> 
  ingredients.push(new Ingredient ("glum of rum", "strong"));
  ingredients.push(new Ingredient ("slug of whisky", "strong"));
  ingredients.push(new Ingredient ("splash of gin", "strong"));

  //building ingredients object<--salty ingredients--> 
  ingredients.push(new Ingredient ("olive on a stick", "salty"));
  ingredients.push(new Ingredient ("salt-dusted rim", "salty"));
  ingredients.push(new Ingredient ("rasher of bacon", "salty"));

  //building ingredients object<--bitter ingredients--> 
  ingredients.push(new Ingredient ("shake of bitters", "bitter"));
  ingredients.push(new Ingredient ("splash of tonic", "bitter"));
  ingredients.push(new Ingredient ("twist of lemon peel", "bitter"));

  //building ingredients object<--sweet ingredients--> 
  ingredients.push(new Ingredient ("sugar cube", "sweet"));
  ingredients.push(new Ingredient ("spoonful of honey", "sweet"));
  ingredients.push(new Ingredient ("splash of cola", "sweet"));

  //building ingredients object<--fruity ingredients--> 
  ingredients.push(new Ingredient ("slice of orange", "fruity"));
  ingredients.push(new Ingredient ("dash of cassis", "fruity"));
  ingredients.push(new Ingredient ("cherry on top", "fruity"));
  
  console.log(ingredients);

  //build pantry array from ingredients 
  pantry.push(ingredients);
  console.log(pantry);

  //empty array for user order
  var orderValue = [];

  //constructor for ingredients <--TODO: modify-->
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
  };//will return max # in array 

  //function to display questions array for user to choose from 
  //displayQuestions();

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
//display questions and create array for user input   
//have bartender create order 
//push results to a div 
