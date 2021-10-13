let express = require('express');
let app = express();
let router = require('./routers/router');
app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);
app.listen(3000);