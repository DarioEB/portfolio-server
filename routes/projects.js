const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });
const {check} = require('express-validator');

router.post(
    '/',
    [
        check('name', 'El nombre del proyecto es obligatorio').not().isEmpty(),
        check('description', 'La descripción del proyecto es obligatoria').not().isEmpty(),
        check('category', 'La categoría es obligatoria').not().isEmpty(),
        check('url', 'El proyecto debe tener una url').not().isEmpty()
    ],
    projectController.createProject    
);

router.get(
    '/',
    projectController.getProjects
);

router.get(
    '/get-image/:image',
    projectController.getImageFile
);

module.exports = router;