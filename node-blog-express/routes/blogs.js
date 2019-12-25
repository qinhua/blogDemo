var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.json({
        code: 0,
        data: {
            list: [{ title: '我是标题', content: '这是内容' }],
            total: 10,
            page: 1
        }
    })
});
router.get('/detail', function(req, res, next) {
    res.json({
        code: 0,
        data: { title: '我是标题', content: '这是内容' }
    })
});

module.exports = router;