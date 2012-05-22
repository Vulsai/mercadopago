
/*
 * Module dependencies
 */

var request = require('superagent');

/**
 * Generate a valid token if not exist or is invalid
 *
 * @param {Function} fn
 */

module.exports = function(fn){

  var self = this;

  if(this.access_token &&  Date.now() < this.access_token.expires_at - 60000) {
    
    fn.call(this, null);

  } else {

    request
    .post('https://api.mercadolibre.com/oauth/token')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({ client_id: this.Client_id , client_secret: this.Client_secret, grant_type: "client_credentials" })
    .end(function(res){
      if(res.ok) {
        self.access_token = res.body;
        self.access_token.expires_at = Date.now() + res.body.expires_in * 1000;
        fn.call(this, null);
      } else {
        fn.call(this, res.text);
      }
    });

  }

};
