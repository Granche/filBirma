module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'DB',
        'REST',
        'Server',
        'LessWatch',
        'Login'
      ]
    },
    Server: {
      endpoint: '/',
      webroot: 'public',
      indexFile: 'index.html',
      port: 3000
    },
    REST: {
      route: '/rest/:model/:modelID?'
    },
    Login: {
      route: '/login'
    },
    DB: {
      host: '127.0.0.1',
      db: 'wreckstad',
      modelDir: m.path.join(appRoot,'models/')
    },
    LessWatch: {
      paths: {
        watchDirs: [
          './less/**/*.less'
        ],
        lessInput: [
          './less/all.less'
        ],
        cssOutput: './www/css'
      }
    }
  };
};