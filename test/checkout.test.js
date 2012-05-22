
/*
 * Module dependencies
 */

var Mercadopago = require('../')
  , should = require('should');

var m = new Mercadopago(require('./keys.json'))
  , id;

describe('checkout', function(){

  describe('#configCheckout()', function(){
    it('should create the configuration and return the state of the configuration', function(done){
      var prefs = {
          "external_reference": "Entrada jsconf"
        , "items": [{
              "title": "Woody toy"
            , "quantity": 8
            , "unit_price": 12.31
            , "currency_id": "USD"
          }]
        , "back_urls": {
              "failure": "https://fakeurl.com/error"
            , "pending": "https://fakeurl.com/pending"
            , "success": "https://fakeurl.com/success"
          }
      };

      m.configCheckout(prefs, function(err, data){
        should.not.exist(err);
        should.exist(data.id);
        should.exist(data.collector_id);
        data.items.length.should.equal(1);
        data.items[0].title.should.equal("Woody toy");

        id = data.id;
        done();

      });

    });
  
  });


  describe('#getAttr()', function(){
    it('should get configuration attributes', function(done){

      m.getAttr(id, function(err, data){
        should.not.exist(err);
        should.exist(data.id);
        should.exist(data.collector_id);
        data.items.length.should.equal(1);
        data.items[0].title.should.equal("Woody toy");
        done();

      });

    });
  
  });


  describe('#updateAttr()', function(){
    it('should update the specific attribute', function(done){

      var option = {
        "back_urls": {
          "pending": "https://www.newpending.com"
        }
      };

      m.updateAttr(id, option, function(err, data){
        should.not.exist(err);
        should.exist(data);
        done();
      });

    });
  
  });



});  
