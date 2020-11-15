//Melkaneas Tribute Pet Project -- Kimberly SandwichMaker v2
var sandwichmaker = {
  topsList: "",
  toppings: [],
  toppingCount: 5,
  sandwichmaker: function () {
    for (var i = 0; i < this.toppingCount; i++){
    var topsTemp = prompt("please add your favorite toppings");
    this.toppings.push(topsTemp);
    }
  },
  showSand: function (toppings) {
    topsList = "<ul>" + "BREAD" + "<br>";
    for (var i = 0; i < toppings.length; i++) {
    topsList += "<li>" + toppings[i] + "</li>" + "<br>";
    }
    topsList += "BREAD" + "</ul>";
    this.topsList += topsList;
  },
  debug: function () {
  console.log(this.tops);
  console.log(this.topsTemp);
  console.log(this.topsList);
  console.log(this.toppings);
  console.log(topsList);
  }
}
sandwichmaker.sandwichmaker();
sandwichmaker.showSand(sandwichmaker.toppings);
document.write(sandwichmaker.topsList);

//sandwichmaker.debug();
