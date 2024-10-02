const express = require('express');
const multer = require('multer');
const router = express.Router();
const main = require('../controller/econtroller');
const path = require('path');

const storage = multer.diskStorage ( {
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

router.get('/', main.getAllProducts);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/signup', main.signup);
router.get('/login', main.login);
router.get('/cart', main.cart);
router.get('/admin', main.admin);




module.exports = router;

