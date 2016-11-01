module.exports = function(reg, mod, dam, own, model) {

  var enBil = new model({
    registration: reg,
    model: mod,
    damage: dam,
    owner: own,
  })

  enBil.save(function(err){
    if(err){throw err;}
  })


};