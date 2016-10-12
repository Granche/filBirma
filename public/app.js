var Bilfil = require("../mongoose-models/bil.js")
console.log(bilfil)
console.log(bilfil.hello)
var enBil = new Bil({
  registration: "RMK 444",
  model: "BMW z145",
  damage: "Broken Window",
  owner: {
    name: "Granit Demiraj",
    number: 0762657896,
    adress: "HelloGatan 13B",
    car: this.registration,
  }
});
