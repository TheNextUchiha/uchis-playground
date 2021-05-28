const express = require('express');
const multer = require('multer');

const upload = multer({
    dest: 'uploads'
});

const router = express.Router();

let alert = true;

router.get('/file-upload', (req, res) => {
    res.render('fileupload');
});

router.post('/file-upload', upload.single('doc'), (req, res) => {
    res.render('fileupload', {alert});
});

module.exports = router;