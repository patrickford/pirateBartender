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

  //function to add ingredients to pantry  
  Pantry.prototype.addIngredient = function (ingredient) {
    if (this.contents[ingredient.type]) {
      this.contents[ingredient.type].push(ingredient.name)
    }
    else {
      this.contents[ingredient.type] = [ingredient.name];
    }
  }

  //function to get random ingredients from pantry for drink 
  Pantry.prototype.getIngredient = function (type) {
    if (this.contents[type]) {
      var index = generateRandomNumber(this.contents[type].length); 
      return this.contents[type][index];
    }
  };

  //remember order constructor 
  var Customer = function (name, drink, preferences, prefIngredients) {
    this.name = name; 
    this.drink = drink; 
    this.preferences = preferences;
    this.ingredients = prefIngredients; 
  };

  //worker constructor 
  var Worker = function (name) {
    this.name = name; 
    this.customers = {};
  };

  //function for worker to introduce themselves 
  Worker.prototype.whoIs = function () {
    var introduction = "<h3>People call me " + this.name + " </h3><p>I'll be your bartender tonight.</p>";
    $("#intro").append(introduction);
  };

  //function for testing if customer is a regular
  Worker.prototype.greetCustomer = function (customerName) {
    console.log(customerName); 
    if (this.customers[customerName]) {
      var greeting = "<h2>" + customerName + " welcome back!</h2><h3>Here is your " + customers.drink + "</h3><br><h5>" + 
        customers.ingredients + "</h5>";
      $("#results").append(greeting);
    }
    else {  
      displayQuestion();
    }
  };//not functional fully 

  //function to add new customer
  Worker.prototype.addCustomer = function (customer) {
      this.customers[customer.name] = customer;
  };

  //bartender constructor 
  var Bartender = function (name) {
    Worker.call(this, name);
    this.questions = []; 
  };

  //create bartender position
  Bartender.prototype = Object.create(Worker.prototype);
  Bartender.prototype.constructor = Bartender; 

  //create new pantry and bartender   
  var pantry = new Pantry(); 
  var Bob = new Bartender("Bob");

  //<----build objects--->
  
  //building question object array  
  Bob.questions.push(new Question ("Do ye like yer drinks strong?", "strong"));
  Bob.questions.push(new Question ("Do ye like it with a salty tang?", "salty"));
  Bob.questions.push(new Question ("Are ye a lubber who likes it bitter?", "bitter"));
  Bob.questions.push(new Question ("Would ye like a bit of sweetness with yer poision?", "sweet"));
  Bob.questions.push(new Question ("Are ye one for a fruity finish?", "fruity"));

  //ingredients into pantry object<--strong ingredients--> 
  pantry.addIngredient(new Ingredient ("glum of rum", "strong"));
  pantry.addIngredient(new Ingredient ("slug of whisky", "strong"));
  pantry.addIngredient(new Ingredient ("splash of gin", "strong"));

  //ingredients into pantry object<--salty ingredients--> 
  pantry.addIngredient(new Ingredient ("olive on a stick", "salty"));
  pantry.addIngredient(new Ingredient ("salt-dusted rim", "salty"));
  pantry.addIngredient(new Ingredient ("rasher of bacon", "salty"));

  //ingredients into pantry object<--bitter ingredients--> 
  pantry.addIngredient(new Ingredient ("shake of bitters", "bitter"));
  pantry.addIngredient(new Ingredient ("splash of tonic", "bitter"));
  pantry.addIngredient(new Ingredient ("twist of lemon peel", "bitter"));

  //ingredients into pantry object<--sweet ingredients--> 
  pantry.addIngredient(new Ingredient ("sugar cube", "sweet"));
  pantry.addIngredient(new Ingredient ("spoonful of honey", "sweet"));
  pantry.addIngredient(new Ingredient ("splash of cola", "sweet"));

  //ingredients into pantry object<--fruity ingredients--> 
  pantry.addIngredient(new Ingredient ("slice of orange", "fruity"));
  pantry.addIngredient(new Ingredient ("dash of cassis", "fruity"));
  pantry.addIngredient(new Ingredient ("cherry on top", "fruity")); 

  //adj and nouns for drink names to be randomly selected
  var drinkAdjectives = ["port", "blimey", "thunder", "dead man", "shark bait", "sea legs", "yellow jack"];
  var drinkNouns = ["landlubber", "grog", "crow's nest", "cog", "booty", "sea dog", "scurvy dog", "fathom"];

  //set global count for display function
  var count = 0; 

  //function to generate random number to pull from ingredients array 
  function generateRandomNumber (max) {
    //math.floor ensure integer is rounded down 
    return Math.floor(Math.random() * max);  
  };

  //function to itierate through questions and display
  function displayQuestion () {
    $("#preferences").empty(); 
    if (count < Bob.questions.length) { 
      var displayQuest = "<label for='userpref'>" + Bob.questions[count].question + "</label>";
      var answer = "<select id='userpref'><option value='yes'>Aye!</option><option value='no'>Nay</option></select>";
      var nextQuestionbtn = "<br><button id='nextQuest' type='button' class='btn btn-success'>Ask me the next question, bartender!</button>";
      $("#preferences").append(displayQuest, answer, nextQuestionbtn);
    }
    else {
      var orderSubmit = "<button type='submit' class='btn btn-danger' id='orderSubmit'>Let's take a gander at yer drink!</button>";
      $("#orderOptions").append(orderSubmit);
    }
  };

  //function to get random adjective and noun for drink names 
  function generateDrinkName () {
      var adjectiveIndex = generateRandomNumber(drinkAdjectives.length);
      var nounIndex = generateRandomNumber(drinkNouns.length);
      var drinkName = drinkAdjectives[adjectiveIndex] + " " + drinkNouns[nounIndex];
      return drinkName; 
  };

  //function to display results to user once drink is created
  function displayResults (drink, ingredients) {
    $("#results").append("<h3>" + drink + "</h3>");
    $("#results").append("<h5>" + ingredients + "</h5>");
  };

  //once user answers question, their choices are put into preferences array 
  $(document).on("click", "#nextQuest", function () {
    if ($("#userpref").val() === "yes") {
      guest.preferences.push(Bob.questions[count].type);
    }
    count++;
    displayQuestion(); 
  });

  //grab preferences and randomly get ingredient from pantry from each type of preference
  $("#orderOptions").submit(function (e) {
    e.preventDefault(); 
    for (var i = 0; i < guest.preferences.length; i++) {
      guest.ingredients.push(pantry.getIngredient(guest.preferences[i]));
    }
    //display results for user of their drink 
    var drinkName = generateDrinkName();
    displayResults(drinkName, guest.ingredients);
    $("#orderOptions").hide();
    $("#startOver").show();   
  });

  //on page load hide redo button and form
  var guest = new Customer("Sam", "", [], []);//do not hardwire customer, TODO:need to make this from input
  $("#startOver").hide();
  $("#orderOptions").hide();  
  Bob.whoIs();

  //ask customer name to save in object array once drink is built
  $("#custName").submit(function (e) {
    e.preventDefault(); 
    var customerName = $("#name").val(); 
    Bob.greetCustomer(customerName);
    //reset input field 
    $("#custName")[0].reset();
    $("#intro").hide();
    $("#orderOptions").show();
  })

  //listener event to start over 
  $(document).on("click", "#startOver", function () {
    $("#preferences").empty();
    $("#results").empty();
    $("#orderOptions").empty();
    $("#startOver").hide(); 
    $("#intro").show(); 
  })

  //TODO: 
  //need to push drink name to object 
  //handle all no edge case, and # of ingredients, think about different conditions such as liquor with 1 ingredient
  //greet customer and remember customer
});  