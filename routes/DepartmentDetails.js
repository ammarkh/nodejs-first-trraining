/**
 * Created by AMMAR-IT on 6/25/2017.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('DepartmentDetails', {});
});

module.exports = router;