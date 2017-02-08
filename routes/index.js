var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    // res.send('PROBANDO DESDE INDEX');
    res.render('index.html');
});

module.exports = router;