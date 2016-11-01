m = {};
g = {};

[
  "express",
  "compression",
  "path",
  "fs",
  "serve-favicon",
  "cookie-parser",
  "body-parser",
  "gulp",
  "gulp-less",
  "gulp-clean-css",
  "mongoose",
  "express-session",
  "./settingsConstr",
  "./classLoader"
  ].forEach(function(x){
  // store required modules in "m"
  m[x.replace(/\W/g,'')] = require(x);
});
console.log("All loaded modules", Object.keys(m));

m.settingsConstr();

m.classLoader();
console.log("All loaded classes", Object.keys(g.classes));

new g.classes.LessWatch();

new g.classes.Server();

