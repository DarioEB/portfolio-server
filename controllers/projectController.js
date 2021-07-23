// Importar el modelo
const Project = require('../models/Project');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


exports.createProject = async (req, res) => {
    // Validación de la petición
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const project = new Project(req.body);
        project.save( (err, projectStored) => {
            if(err) return res.status(500).send('Error al guardar');
            if (!projectStored) return res.status(404).send('No se ha podido guardar el proyecto');
            return res.status(200).send({project: projectStored});  
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }   
}

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getImageFile = async(req, res) => {
    try {
        console.log(req.params);
        const file = req.params.image;
        console.log('Nombre de archivo: ')
        console.log(file);
        const pathFile = `./uploads/${file}`;

        fs.exists(pathFile, (exists) => {
            if(exists) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return res.status(200).send('No existe la imagen');
            }
        } )
    } catch(error) {
        console.log(error);
    }
    
}