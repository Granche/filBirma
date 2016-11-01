// constructs g.settings object
module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'/classes/'),
      toLoad: [
        'Server',
        'DB',
        'LessWatch'
      ]
    },
    Server: {
      endpoint: '/',
      secondEndpoint: '/bilar/:id?',
      bilModel: 'Bil',
      webroot: 'public',
      indexFile: 'index.html',
      port: 3000
    },
    LessWatch: {
      paths: {
        watchDirs: [
          './less/**/*.less'
        ],
        lessInput: [
          './less/all.less'
        ],
        cssOutput: './public/css'
      } 
    },
    DB: {
      host: '127.0.0.1',
      db: 'filBirma',
      modelDir: m.path.join(appRoot, 'models/')
    }
  };
};