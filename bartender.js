$(document).ready(function() {

  //pantry ingredients 
  var pantry = {
    strong: ["Glum of rum", "slug of whisky", "splash of gin"],
    salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
    bitter: ["Shake of bitters", "Splash of tonic", "twist of lemon peel"],
    sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
    fruit: ["Slice of orange", "Dash of cassis", "Cherry on top"],
  }

  //empty string for user order
  orderValue = [];

  //constructor for ingredients 
  var userOrder = function (strong, salty, bitter, sweet, fruit) {
    this.strong = orderValue[0];
    this.salty = orderValue[1];
    this.bitter = orderValue[2];
    this.sweet = orderValue[3]; 
    this.fruit = orderValue[4];
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