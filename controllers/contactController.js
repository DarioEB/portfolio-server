// Importar el modelo
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
exports.sendEmail = async (req, res) => {
    
    const contact = new Contact(req.body);

    console.log('Datos de contacto');
    console.log(contact);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '2d.freelance.dev@gmail.com', // generated ethereal user
            pass: 'aibkupvlfyzwidja', // generated ethereal password
        },
    })

    try {
        // send mail with defined transport object
        const msg = await transporter.sendMail({
            from: '2-D <2-d.tech>', // sender address
            to: contact.email, // list of receivers
            subject: `Gracias por contactarte con 2-d`, // Subject line
            text: `Hola ${contact.name}, muchas gracias por contactarte con 2-d. Te contactaré los mas pronto posible. Un saludo.`, // plain text body
        });

        const noti = await transporter.sendMail({
            from: `2-d - Sitio web. <2d.freelance.dev@gmail.com>`, 
            to: 'darioe.barboza@gmail.com',
            subject: contact.subject,
            text: `${contact.message}. Mensaje enviado desde el sitio web de :${contact.email}`
        });

        await contact.save();

        res.status(200).json({message: 'Mensaje enviado correctamente'})
    } catch (error) {
        return res.status(400).json({message: 'E-mail no enviado'}); 
    }  
}