$(document).ready(function() {

  //ingredients constructor 
  var Ingredients = function (ingredients) {
    this.ingredients = ingredients
  };

  var Pantry = function (availableItems) {
    this.availableItems = availableItems
  };

  //ingredients object 
  var strong = new Ingredients (["Glum of rum", "slug of whisky", "splash of gin"]),
  var salty = new Ingredients (["Olive on a stick", "salt-dusted rim", "rasher of bacon"]),
  var bitter = new Ingredients (["Shake of bitters", "Splash of tonic", "twist of lemon peel"]),
  var sweet = new Ingredients (["Sugar cube", "Spoonful of honey", "Splash of cola"]),
  var fruity = new Ingredients (["Slice of orange", "Dash of cassis", "Cherry on top"]),

  //pantry ingredients object 
  var pantry = new Pantry ([strong.ingredients, salty.ingredients, bitter.ingredients, sweet.ingredients, fruity.ingredients]);



  //empty string for user order
  orderValue = [];

  //constructor for ingredients 
  var UserOrder = function (strong, salty, bitter, sweet, fruity) {
    this.strong = orderValue[0];
    this.salty = orderValue[1];
    this.bitter = orderValue[2];
    this.sweet = orderValue[3]; 
    this.fruity = orderValue[4];
  }

  //handle sumbit event 
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
});