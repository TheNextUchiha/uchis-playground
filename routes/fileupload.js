const express = require('express');
const multer = require('multer');

const router = express.Router();

// ---> Multer configs <---
const upload = multer({
    dest: 'uploads'
});

const uploadImg = multer({
    dest: 'uploads',
    limits: {
        fileSize: 1 * 1024 * 1024
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb('Please upload only a Picture!');
        }

        cb(undefined, true);
    }
});

const uploadDoc = multer({
    dest: 'uploads',
    limits: {
        fileSize: 500000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(pdf|doc|docx)$/)) {
            cb(new Error('Please upload only a Document'));
        }

        cb(undefined, true);
    }
});

let alert = true;

// ---> GET Requests <---
router.get('/file-upload', (req, res) => {
    res.render('fileupload');
});

router.get('/file-upload/img', (req, res) => {
    res.render('fileuploadimg');
});

router.get('/file-upload/doc', (req, res) => {
    res.render('fileuploadimg');
});

router.get('/file-upload/any', (req, res) => {
    res.render('fileuploadimg');
});

// ---> POST Requests <---
router.post('/file-upload/img', uploadImg.single('doc'), (req, res) => {
    res.render('fileuploadimg', {alert});
});

router.post('/file-upload/doc', uploadDoc.single('doc'), (req, res) => {
    res.render('fileupload', {alert});
});

router.post('/file-upload/any', upload.single('doc'), (req, res) => {
    res.render('fileupload', {alert});
});

module.exports = router;