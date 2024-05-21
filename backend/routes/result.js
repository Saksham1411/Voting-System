const express = require('express');
const { getResult, addResult } = require('../controller/result');

const router = express.Router();

router.route('/result').get(getResult).post(addResult);

module.exports = router;