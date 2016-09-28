$(document).ready(function() {

  //ingredients constructor 
  var Ingredients = function (ingredients) {
    this.ingredients = ingredients
  };

  var Pantry = function (availableItems) {
    this.availableItems = availableItems
  };

  //ingredients object 
  var strong = new Ingredients (["Glum of rum", "slug of whisky", "splash of gin"])
  var salty = new Ingredients (["Olive on a stick", "salt-dusted rim", "rasher of bacon"])
  var bitter = new Ingredients (["Shake of bitters", "Splash of tonic", "twist of lemon peel"])
  var sweet = new Ingredients (["Sugar cube", "Spoonful of honey", "Splash of cola"])
  var fruity = new Ingredients (["Slice of orange", "Dash of cassis", "Cherry on top"])

  //pantry ingredients object 
  var pantry = new Pantry ([strong.ingredients, salty.ingredients, bitter.ingredients, sweet.ingredients, fruity.ingredients]);
  console.log(pantry);

  //empty string for user order
  orderValue = [];

  //constructor for ingredients 
  var UserOrder = function (strongItem, saltyItem, bitterItem, sweetItem, fruityItem) {
    this.strongItem = orderValue[0];
    this.saltyItem = orderValue[1];
    this.bitterItem = orderValue[2];
    this.sweetItem = orderValue[3]; 
    this.fruityItem = orderValue[4];
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