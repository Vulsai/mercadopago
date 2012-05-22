
/*
 * Module dependencies
 */

var request = require('superagent')
  , oauth = require('./oauth')
  , Mercadopago = module.parent.exports;

/**
 * Configure the checkout parameters
 *
 * @param {Object} config attributes
 * @param {Function} callback
 * @api public
 */

Mercadopago.prototype.configCheckout = function(attrs, fn) {

  var self = this;

  oauth.call(this, function(err){

    if(err) fn(err, null);
    else {
      request
      .post('https://api.mercadolibre.com/checkout/preferences')
      .query({access_token: self.access_token.access_token})
      .set('accept', 'application/json')
      .send(attrs)
      .end(function(res){
        if(res.ok) {
          fn(null, res.body);
        } else {
          fn(res.text, null);
        }
      });
    }
  });
};

/**
 * Get configuration attribute
 *
 * @param {Number} Config id
 * @param {Function} callback
 * @api public
 */

Mercadopago.prototype.getAttr = function(id, fn){

  var self = this;

  oauth.call(this, function(err){
    if(err) fn(err, null);
    else {
      request
      .get('https://api.mercadolibre.com/checkout/preferences/' + id)
      .query({access_token: self.access_token.access_token})
      .set('accept', 'application/json')
      .end(function(res){
        if(res.ok) {
          fn(null, res.body);
        } else {
          fn(res.text, null);
        }
      });
    }
  });
};


/**
 * Get configuration attribute
 *
 * @param {Number} Config id
 * @param {Object} Option
 * @param {Function} callback
 * @api public
 */

Mercadopago.prototype.updateAttr = function(id, option, fn){

  var self = this;

  oauth.call(this, function(err){

    if(err) fn(err, null);
    else {
      request
      .put('https://api.mercadolibre.com/checkout/preferences/' + id)
      .query({access_token: self.access_token.access_token})
      .set('accept', 'application/json')
      .set('content-type', 'application/json')
      .send(option)
      .end(function(res){
        if(res.ok) {
          fn(null, res.body);
        } else {
          fn(res.text, null);
        }
      });
    }
  });

};
