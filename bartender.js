$(document).ready(function() {
    
    //questions constructor 
    var Questions = function (questions) {
        this.questions = questions; 
    };

    // question object 
    var strongQuestion = new Questions ("Do ye like yer drinks strong?");
    var saltyQuestion = new Questions ("Do ye like it with a salty tang?");
    var bitterQuestion = new Questions ("Are ye a lubber who likes it bitter?");
    var sweetQuestion = new Questions ("Would ye like a bit of sweetness with yer poision?");
    var fruityQuestion = new Questions ("Are ye one for a fruity finish?");
    


  //ingredients constructor 
  var Ingredients = function (ingredients) {
    this.ingredients = ingredients;
  };

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
  orderValue = [];

  //constructor for ingredients 
  var Order = function (orderValue) {
    this.strong = orderValue[0];
    this.salty = orderValue[1];
    this.bitter = orderValue[2];
    this.sweet = orderValue[3]; 
    this.fruity = orderValue[4];
  }//TODO: need to clarify this w/mentor 
  //wanted to use with math random to get random drink ingredients 

  //function to generate random number to pull randomly from ingredients array 
  var GenerateRandomNumber = function (min, max) {
    var randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;
    return randomNumber; 
    console.log(randomNumber); 
  };

  //function to display questions array for user to choose from 

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
      GenerateRandomNumber(0,2);
    })
    console.log(orderValue);
  })
});//TODO:  
//have bartender create order 
//push results to a div 
