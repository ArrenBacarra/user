const productMan = require('../models/productMan');

const main = {
    getAllProducts: (req, res) => {
        Promise.all([
            productMan.getAllProducts(),
        ]).then(([productList]) => {
            res.render('index', {
                products:productList
            });
        }).catch(err => {
            throw err
        })
        // productMan.getAllProducts((err, products) => {
        //     if (err) {
        //         res.status(500).send(err);
        //     } else {
        //         res.render('index', { products });
        //     }
        // });
    },
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    admin: (req, res) => {
        res.render('admin');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    }
};

module.exports = main;
