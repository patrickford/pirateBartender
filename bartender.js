$(document).ready(function() {
  
  //pantry ingredients 
  var pantry = {
    strong: ["Glum of rum", "slug of whisky", "splash of gin"],
    salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
    bitter: ["Shake of bitters", "Splash of tonic", "twist of lemon peel"],
    sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
    fruit: ["Slice of orange", "Dash of cassis", "Cherry on top"],
  }

  //constructor for ingredients 
  function ingredients (strong, salty, bitter, sweet, fruit) {
    this.strong = strong;
    this.salty = salty;
    this.bitter = bitter;
    this.sweet = sweet; 
    this.fruit = fruit;
  }
});