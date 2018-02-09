var pomelo_client = require('./pomelo-client');
var pomelo = pomelo_client.create();

pomelo.init({
    host: '127.0.0.1',
    port: 3014,
    user: {},
    handshakeCallback : function(){}
  }, function() {
    pomelo.request('gate.gateHandler.queryEntry', {
        uid: 1
    }, function(data) {
        console.log(data);
    });
    console.log('success');
  });

