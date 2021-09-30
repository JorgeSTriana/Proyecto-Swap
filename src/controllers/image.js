const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs =  require('fs-extra');

const { Image } = require('../models');
const { request } = require('https');

const ctrl = {};


ctrl.index = async (req,res) => {
       const image= await Image.findOne({filename: {$regex: req.params.image_id}}); //expresiones regulares para consultar la imagen
       console.log(image);    
       res.render('image',{image});
};

ctrl.create = (req,res) => {
    
    const saveImage = async () => {
        
        const imgUrl = randomNumber();
        const images =  await Image.find({filename: imgUrl});
        if (images.length > 0){
            saveImage();
        }else{
            console.log(imgUrl);
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve('src/public/upload/'+imgUrl+ext);
             
            if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
                    await fs.rename(imageTempPath, targetPath);
                    const newimg = new Image({
                        title: req.body.title,
                        filename: imgUrl + ext,
                        description: req.body.description
                    });
                    const imageSaved = await newimg.save();
                    res.redirect('/images/'+imgUrl);                   
            }else{
               await fs.unlink(imageTempPath);
               res.status(500).json({error: 'Solo imágenes estan permitidas'});
            } 
        }       
    };
    saveImage();    
};

ctrl.like = (req,res) => {
    
};

ctrl.comment = (req,res) => {
    
};

ctrl.remove = (req,res) => {
    
};


module.exports = ctrl;