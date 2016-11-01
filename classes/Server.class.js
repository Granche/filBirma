'use strict';
var nyBil = require("../help-modules/bilGenerator.js")
module.exports = class Server {
  constructor() {
    // save our settings to this
    this.settings = g.settings.Server;

    // add express to this
    this.app = m.express();
    //Hämta databas instansen
    this.db = new g.classes.DB();

    this.model = this.db.getModel(this.settings.bilModel)
    // run the setup method
    this.setup();
  }
  setup() {
    // tell express to use middleware to parse JSON
    this.app.use(m.bodyparser.json());
    // declare a webroot
    this.app.use(
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.webroot)
      )
    );

    // compress all files using gzip
    this.app.use(m.compression());

    // parse all request cookies
    this.app.use(m.cookieparser());

    // parse all urlencoded request body data
    // for example from "standard" HTML forms
    this.app.use(m.bodyparser.urlencoded({extended: false}));

    
    // create an endpoint ("/")
    var me = this;






    this.app.get(this.settings.endpoint, function(req, res) {
      res.sendFile(me.settings.indexFile, {root: me.settings.webroot});
    });




    this.app.get(this.settings.secondEndpoint, (req, res) =>{
      if(!req.params.id){  
        me.model.find({}, function(err, data){
          if(data.length <= 0){
            res.json({noERROR: 'Databasen är tom, Anropar dummyGeneratorn, var god ladda om sidan'})
            var antal = 12;
            nyBil(me.model, antal)
          }
          else {
            res.json(data)
          }
        })
      }
      else {
        me.model.findOne({_id: req.params.id}, (err,data) =>{
          if(err) {throw err;}
          else {
            res.json(data)
          }
        })
      }
    })





    this.app.post(this.settings.secondEndpoint, (req, res, next) => {
      if(!req.body.registration && !req.body.model && !req.body.damage && !req.body.owner){
        res.json({error: "Någon eller några av dina fält är toma &&-|| ogiltiga!"})
      }
      
      var enBil = new me.model({
        registration: req.body.registration,
        model: req.body.model,
        damage: req.body.damage,
        owner: req.body.owner,
      })

      enBil.save(function(err){
        if(err){throw err;}
      })
      res.json({"OK":"Sparat"});
    })






    this.app.put(this.settings.secondEndpoint, function(req, res){
      if(!req.params.id){ 
        res.json("Put-request kräver ett id i URL:en");
      }
      else {
        me.model.update({_id:req.params.id}, { 
          registration: req.body.reg,
          model: req.body.model,
          damage: req.body.damage,
          owner: req.body.owner}, (err, data) => {
            if(err){throw error;}
              res.json({"OK": "Objekt har blivit ändrat"})
        })
      }
    })






    this.app.delete(this.settings.secondEndpoint, function(req, res){
      if(!req.params.id){ 
        res.json("Delete-request kräver ett id i URL:en");
      }
      else {
        me.model.remove({_id:req.params.id}, function(err) {
          if(!err) {
            res.json({"OK": req.params.id+" har blivit raderat!"})
          }else {
            res.json({"ERROR": "Något gick galet med raderingen"})
          }
        })
      }    
    })

    // listen on port 3000
    this.app.listen(this.settings.port,  function() {
      console.log("Server listening on port "+me.settings.port);
    });
  }
}