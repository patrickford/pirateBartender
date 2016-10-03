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
  var Pantry = function () {
    this.contents = {}; 
  };

  Pantry.prototype.addIngredient = function (ingredient) {
    if (this.contents[ingredient.type]) {
      this.contents[ingredient.type].push(ingredient.name)
    }
    else {
      this.contents[ingredient.type] = [ingredient.name];
    }
  }

  Pantry.prototype.getIngredient = function (type) {
    if (this.contents[type]) {
      var index = generateRandomNumber(this.contents[type].length); 
      return this.contents[type][index];
    }
  };

  //worker constructor 
  var Worker = function (name) {
    this.name = name; 
    this.customers = {};
  }

  Worker.prototype.whoIs = function () {
    alert("My name is " + this.name);
  }

  Worker.prototype.greetCustomer = function () {
    var customer = prompt("Ahoy, matey what is your name?"); 
    if (this.customers[customer]) {
      //output drink 
    }
    else {
      this.customer[customer] = ""; 
      //displayQuestion();
      //push drink name to customer array as well
    }

  }

  //bartender constructor 
  var Bartender = function (name) {
    Worker.call(this, name);
    this.questions = []; 
  };

  Bartender.prototype = Object.create(Worker.prototype);
  Bartender.prototype.constructor = Bartender; 

  //create new pantry and bartender   
  var pantry = new Pantry(); 
  var Bob = new Bartender("Bob");
  
  //building question object array  
  Bob.questions.push(new Question ("Do ye like yer drinks strong?", "strong"));
  Bob.questions.push(new Question ("Do ye like it with a salty tang?", "salty"));
  Bob.questions.push(new Question ("Are ye a lubber who likes it bitter?", "bitter"));
  Bob.questions.push(new Question ("Would ye like a bit of sweetness with yer poision?", "sweet"));
  Bob.questions.push(new Question ("Are ye one for a fruity finish?", "fruity"));

  //building ingredients into pantry object<--strong ingredients--> 
  pantry.addIngredient(new Ingredient ("glum of rum", "strong"));
  pantry.addIngredient(new Ingredient ("slug of whisky", "strong"));
  pantry.addIngredient(new Ingredient ("splash of gin", "strong"));

  //building ingredients into pantry object<--salty ingredients--> 
  pantry.addIngredient(new Ingredient ("olive on a stick", "salty"));
  pantry.addIngredient(new Ingredient ("salt-dusted rim", "salty"));
  pantry.addIngredient(new Ingredient ("rasher of bacon", "salty"));

  //building ingredients into pantry object<--bitter ingredients--> 
  pantry.addIngredient(new Ingredient ("shake of bitters", "bitter"));
  pantry.addIngredient(new Ingredient ("splash of tonic", "bitter"));
  pantry.addIngredient(new Ingredient ("twist of lemon peel", "bitter"));

  //building ingredients into pantry object<--sweet ingredients--> 
  pantry.addIngredient(new Ingredient ("sugar cube", "sweet"));
  pantry.addIngredient(new Ingredient ("spoonful of honey", "sweet"));
  pantry.addIngredient(new Ingredient ("splash of cola", "sweet"));

  //building ingredients into pantry object<--fruity ingredients--> 
  pantry.addIngredient(new Ingredient ("slice of orange", "fruity"));
  pantry.addIngredient(new Ingredient ("dash of cassis", "fruity"));
  pantry.addIngredient(new Ingredient ("cherry on top", "fruity")); 

  //adj and nouns for drink names to be randomly selected
  var drinkAdjectives = ["port", "blimey", "clap of thunder", "dead man", "shark bait", "sea legs", "yellow jack", "sink me"];
  var drinkNouns = ["landlubber", "grog", "crow's next", "cog", "booty", "sea dog", "scurvy dog", "fathom"];

  //empty array for user order and preferences to build order 
  var preferences = [];
  var userOrder = [];

  //set global count for display function and click event
  var count = 0; 

  //function to itierate through questions and display
  function displayQuestion () {
    $("#preferences").empty(); 
    if (count < Bob.questions.length) { 
      var displayQuest = "<label for='userpref'>" + Bob.questions[count].question + "</label>";
      var answer = "<br><select id='userpref'><option value='yes'>Aye!</option><option value='no'>Nay</option></select>";
      var nextQuestionbtn = "<br><button id='nextQuest' type='button' class='btn btn-success'>Ask me the next question, bartender!</button>";
      $("#preferences").append(displayQuest, answer, nextQuestionbtn);
    }
    else {
      var orderSubmit = "<button type='submit' class='btn btn-danger' id='orderSubmit'>Let's take a gander at yer drink!</button>";
      $("#orderOptions").append(orderSubmit);
    }
  };

  //function to get random adjective and noun for drink names 
  function getRandomAdjNoun () {
      var userIndex = generateRandomNumber(drinkAdjectives.length);
      console.log(generateRandomNumber(drinkAdjectives.length));
      return userIndex;
  }//work in progress 

  //function to display results to user once drink is created
  function displayResults () {
    var results = "<h5>" + userOrder + "</h5>"
    $("#results").html(results);
  }

  //once user answers question, type of ingredient is grabbed and put into preferences array 
  $(document).on("click", "#nextQuest", function () {
    if ($("#userpref").val() == "yes") {
      preferences.push(Bob.questions[count].type);
    }//work in progress
    //if (preferences >= 4) {
      //console.log("chose more than 3");
    //}
    //if (preferences == "") {
      //$("#results").text("Here is your glass of water, landsman.")
    //}/TODO: work in progress--need to get first condition to display first 
    count++;
    console.log(preferences);
    displayQuestion(); 
  });

  $("#orderOptions").submit(function (e) {
    e.preventDefault(); 
    for (var i = 0; i < preferences.length; i++) {
      pantry.getIngredient(preferences[i]);
      userOrder.push(pantry.getIngredient(preferences[i]));
      console.log(userOrder);
      getRandomAdjNoun();
      displayResults();
    }//once drink made save in customer drink array 
  });

  displayQuestion();
  //Worker.prototype.greetCustomer();

  //TODO: random name generator array 
  //handle all no edge case, and # of ingredients, think about different conditions such as liquor with 1 ingredient
  //greet customer and remember customer

  //function to generate random number to pull randomly from ingredients array 
  function generateRandomNumber (max) {
    //math.floor makes sure integer is rounded down 
    return Math.floor(Math.random() * max);  
  };

});  