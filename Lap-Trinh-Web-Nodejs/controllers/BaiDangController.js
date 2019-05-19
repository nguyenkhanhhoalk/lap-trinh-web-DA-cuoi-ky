var express = require('express'),
    baiDangRepository = require('../repositories/BaiDangRepository'),
    moment = require('moment');

var router = express.Router();

router.get('/baidang/:id', (req, res) => {
    res.redirect('/bai-viet-chi-tiet');
    // baiDangRepository.getBaiDangById(req.params.id).then(row => {
    //     console.log(row);
    // });
});

module.exports = router;