const express = require('express');
const router = express.Router();
const { getAllItems } = require('../controllers/tasks');

router.route('/').get(getAllItems);

module.exports = router;
