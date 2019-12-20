var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.render('blog', { title: '列表接口' });
});

module.exports = router;