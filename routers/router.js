let express = require('express');
let router = express.Router();
router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/floatPage', (req, res) => {
    res.render('floatPage.ejs');
});
router.get('/flexboxPage', (req, res) => {
    res.render('flexboxPage.ejs');
});
router.get('/gridLayoutPage', (req, res) => {
    res.render('gridLayoutPage.ejs');
});
module.exports = router;