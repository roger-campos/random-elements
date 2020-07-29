function addClassOnRandom() {
  var rndmClass = "select animated tada";
  var rndmElement = ".element";
  var randNum = Math.floor(Math.random() * $(rndmElement).length);
  $(rndmElement).eq(randNum).addClass(rndmClass);
  $(rndmElement).eq(randNum).siblings().removeClass(rndmClass);
};

$(document).ready(function() {
  $(".spin").click(function(){
    var spin = setInterval(function(){ addClassOnRandom(); }, 400);
    setTimeout(function(){ window.clearInterval(spin); }, 3000);

    
  });
});
