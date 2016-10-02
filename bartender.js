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
    console.log(this.contents[type]);
    if (this.contents[type]) {
      var index = GenerateRandomNumber(this.contents[type].length); 
      return this.contents[type][index];
    }
  };

  //worker constructor 
  var Worker = function (name) {
    this.name = name; 
  }

  Worker.prototype.whoIs = function () {
    alert("My name is " + this.name);
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

  console.log(Bob.questions);
  console.log(typeof Bob);//shows what type of thing this is for clarification 

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
  console.log(pantry);


  //empty array for user order
  var preferences = [];
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

    $(document).on("click", "#nextQuest", function () {
      console.log("click");
      if ($("#userpref").val() == "yes") {
        preferences.push(Bob.questions[count].type);
      }
      count++;
      console.log(preferences);
      displayQuestion(); 
    });//work in progress 

  displayQuestion();

  //TODO: may need to refactor from this point down-->

  //function to generate random number to pull randomly from ingredients array 
  function GenerateRandomNumber (max) {
    //math.floor makes sure integer is rounded down 
    return Math.floor(Math.random() * max);  
  };//will return max # in array 

  //handle sumbit event & push values into orderValue array 
  //$("#orderOptions").submit(function(e){
    //e.preventDefault();
    //grab user order values and push to orderValue array 
    //$("select").each(function() {
      //if ($(this).val() == "yes") {
        //orderValue.push(true);
      //} 
      //else {
        //orderValue.push(false);
      //}
      //GenerateRandomNumber(0, 2);
    //})
    //console.log(orderValue);
  //})
});//TODO:
//display questions and create array for user input   
//have bartender create order 
//push results to a div 
