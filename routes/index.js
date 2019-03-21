var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bite Restaurant', 
                       message: 'Bite Restaurant has reinvented the handcrafted burger with fresh flavours and locally-sourced ingredients. The Bite experience features premium service in a comfortable setting, accented by a unique and ever-changing selection of craft beers, fine wines and specialty cocktails.Owners Glen & Bettina have designed a high end twist on an old concept. This includes using local meats and cheeses and in house made sauces. Bite is based on bringing back basic comfort food with added flavor profiles while offering unique drinks.',
                        romantic: 'We are offering range from classic french cuisine to contemporary twists on dining classics. All are sure to offer the date night or valentines day exprerience any couple might hope for and we specially serve exotic valentines recipes for loved ones. ',
                        delicious: 'We proudly serve fresh and delicious menu for our everyday customers whether its our house made salad dressing or healthy soups, maxican and candian burgers, we take great care with our customers food. We have newly reinvented 50 dishesh for our customers who loves to being healthy and organic. ',
                        wines: 'We serves 50 brands of wines to our customers which is starts from $25 to $1290. We also serve worlds top 5 brands like mascota, olema, chateau, josh celler and verada tri country to our special customer on special occasions.'});
});

// get a dynamic user via the route parameter
router.get('/:user', function(req, res, next) {
    console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
