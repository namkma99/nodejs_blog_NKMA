const express = require('express');
const NewController = require('../app/controllers/NewController');
const router = express.Router();

const newsController = require('../app/controllers/NewController')

// newsController.index

router.use('./:slug', newsController.show);
// router.use('/', newsController.index);
router.use('./', NewController.index);

module.exports = router;
