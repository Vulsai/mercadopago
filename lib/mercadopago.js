
/**
 * Constructor  
 *
 * @param {Object} credentials
 */

function Mercadopago(credentials) {

  if(credentials.Client_id && credentials.Client_secret) {

    this.Client_id = credentials.Client_id;
    this.Client_secret = credentials.Client_secret;

  } else {

    throw new Error("Please provide Client_id and Client_secret credentials.");

  }

};


/*
 * Exports the constructor
 */

module.exports = Mercadopago;

/*
 * Checkout API
 */

require('./checkout');
