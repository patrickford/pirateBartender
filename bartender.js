$(document).ready(function() {

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
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max-min)) + min; 
  };

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
    })
    console.log(orderValue);
  })
});//TODO: generate math.random() function 
//have bartender create order 
//push results to a div 
