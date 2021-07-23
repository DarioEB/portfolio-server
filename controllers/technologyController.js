const Technology = require('../models/Technology');
const fs = require('fs');
const path = require('path');

exports.getTechnologies = async (req, res) => {
    try {
        const technologies = await Technology.find();
        console.log(technologies);
        res.json({ technologies });
    } catch (error) {
        console.log(error);
        res.staus(500).send('Hubo un error en el servidor');
    }
}

exports.getImageFile = async (req, res) => {
    try {
        const file = req.params.image;
        const pathFile = `./uploads/${file}`;
        fs.exists(pathFile, (exists) => {
            if(exists) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return res.status(200).send('No existe la imagen');
            }
        })
    } catch (error) {
        console.log(error);
    }
}