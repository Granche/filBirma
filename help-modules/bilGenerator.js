usedRegs = [];

module.exports = function(model, antal) {

  regArr = ["ABC 123","DEF 345","GHI 456","JKL 567","MNO 678","PQR 789"," STU 890","VXY 012"," XYZ 123","KPG 856","HAM 041","AKF 222","YUA 621","AYH 999","GRA 666","NIT 333","FLY 696","TIO 337","HAL 239","OLA 753"];
  modelArr = ["Mercedes Benz A2","Toyota Carrila -00","VW GOLF -12","Mercedes Benz E100 -16","Alfa Romeo 75","Audi A4 -99","BMW 327 -15","Bugatti EB110 -14","Chevrolet Opala -11","Jaguar XK -09","Jeep Wrangler -02","Lamborghini Urraco 03","Lincoln Town Car -66","Opel Corsa -87","Peugeot 206 -00","Porsche 928 -08","Renault 5 -06","Volvo 140 -55","Toyota Prius -14","Nissan Micra -88"];
  damageArr = ["Regular Service","Regular Service","Regular Service","Regular Service","Broken headlight","Engine failure","Tire change","Collision damage","Collision damage","Broken windows","Filter change","Oil change","broken fuel-gauge","Needs new stereo","Needs windows tinted","Brake failure"," Needs wheel adjustment","Won't start","Wont stop","Needs painting on rear right-side"];
  ownerArr = ["{name: 'Adam Bertilsson', number: '0735-125360'}","{name: 'Bertil Christiansson', number '0704-883459'}","{name: 'Christian Davidsson', number '0706-36987'}","{name: 'David Eriksson', number '040-942563'}","{name: 'Erik Fredriksson', number '0706-843258'}","{name: 'Fredrik Gustavsson', number '0704-258588'}","{name: 'Gustav Henriksson', number '0736-895623'}","{name: 'Henrik Ingvarsson', number '0722-147963'}","{name: 'Ingvar Johansson', number '0709-951247'}","{name: 'Johan Kristiansson', number '0708-159874'}","{name: 'Kristian Larsson', number '0704-123458'}","{name: 'Lars Mårtensson', number '0734-212121'}","{name: 'Mårten Nilsson', number '0700-268113'}"];
  
  for(var i=0; i<antal; i++) {
    var enBil = new model({
      model: modelArr[Math.round(Math.random()*modelArr.length)],
      damage: damageArr[Math.round(Math.random()*damageArr.length)],
      owner: ownerArr[Math.round(Math.random()*ownerArr.length)],
    });

    var aReg = regArr[Math.round(Math.random()*regArr.length)];
    
    for(var i=0; i<usedRegs.length; i++) {
      if(aReg == usedRegs[i]){
        aReg = regArr[Math.round(Math.random()*regArr.length)];
      }
      continue    
    }
    enBil.registration = aReg;
    usedRegs.push(aReg);

    enBil.save(function(err){
      if(err) {throw err;}
    })
  }
}
  
