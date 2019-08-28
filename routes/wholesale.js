var express = require('express');
var router = express.Router();
var ip = require('ip');
const internalIp = require('internal-ip');
const fetch = require('node-fetch');

// var thisIP = ip.address() // my ip address

var thisIP = internalIp.v4.sync();
var strapi = 'https://spinafarmspumpkinpatch.com/api';


function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

router.get('/', (req, res, next) => {
  Promise.all([
    get(strapi+'/pages/9'),
    
    
  ]).then(([wholesale]) =>
    res.render('wholesale', { wholesale: wholesale, strapi: strapi})
    )
    .catch(err => res.send('Oops, something has gone wrong'))
})



module.exports = router;