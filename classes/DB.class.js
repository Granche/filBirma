'use strict';
var connection;

module.exports = class DB {
  constructor() {
    if (connection) { return; }

    this.settings = g.settings.DB;

    this.connect();

    this.loadModels();
  }

  connect() {
    m.mongoose.connect('mongodb://'+this.settings.host+'/'+this.settings.db);

    connection = m.mongoose.connection;
    var me = this;
    connection.once('open', () => {
      console.log("Mongoose connected to "+this.settings.db);
      m.mongoose.model("cars").find(function(err, result){
        if(err) {m.logErr(err)}
        if(result.length <=0){
          m.dummyGen();
        } 
        return
      })
    });
  }

  getModel(name) {
    return m.mongoose.model(name);
  }

  loadModels() {
    var modelFiles = m.fs.readdirSync(this.settings.modelDir);
    
    console.log("mf", modelFiles);

    modelFiles.forEach(function(fileName) {
      require(m.path.join(this.settings.modelDir, fileName));
    }, this);
  }
};