const express = require('express');
const router = express.Router();
const technologyController = require('../controllers/technologyController');

router.get(
    '/',
    technologyController.getTechnologies
);

router.get(
    '/get-image/:image',
    technologyController.getImageFile
);

module.exports = router;