var express = require('express');
var router = express.Router();
var ip = require('ip');
const internalIp = require('internal-ip');
const fetch = require('node-fetch');

// var thisIP = ip.address() // my ip address

var thisIP = internalIp.v4.sync();
var strapi = 'http://'+thisIP+':1337';


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
    get(strapi+'/slides'),
    get(strapi+'/pages/1'),
    get(strapi+'/announcements'),
    
  ]).then(([slides, page, announcements]) =>
    res.render('index', { slides: slides, strapi: strapi, page: page, announcements: announcements})
    )
    .catch(err => res.send('Oops, something has gone wrong'))
})

// /* GET home page. */
// router.get('/', function(req, res, next) {




//     res.render('index', { slides: json});
  
// });

module.exports = router;


