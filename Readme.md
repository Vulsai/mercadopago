# Mercadopago Checkout API

Mercadopago Checkout API library.

## How to install

```bash
npm install mercadopago
```

## How to use

Go to [Mercadopago Developers](https://developers.mercadopago.com/integracion-checkout) Site. Follow the steps and get access credentials.

Then, in your script

```js
var Mercadopago = require('mercadopago');

var m = new Mercadopago({
    Client_id: 'your client id'
  , Client_secret: 'your client secret'
});

m.configCheckout(your_attrs, function(err, data){

  if(err) // Handle the error

  else // Use the data

});
```

## Methods

* configCheckout(Object attrs, Function callback) Create a new product configuration
* getAttr(Number id, Function callback) Get configuration attributes
* updateAttr(Number id, Object option, Function callback) Update a configuration option

## Author

Dan Zajdband <dan.zajdband@gmail.com>

## Docs

visit [Mercadopago Developers](https://developers.mercadopago.com/) for more information about Mercadopago API

## Contributing

If you want to contribute remember to add tests before and replace the test/keys.json with your own api keys.
