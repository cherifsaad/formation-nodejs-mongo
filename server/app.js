const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

app.set('jwt-secret', 'formation-softyflow-2024')
app.use(cookieParser());

app.use(cors());
app.use(morgan('dev'))
require('./models');

var options = {
    useNewUrlParser: true,
    tlsInsecure: true
}
mongoose.connect('url of your cluster mongodb atlas', options)
.then(()=>{
    console.log('connected to mongodb')
});

require('./routes')(app); 

app.listen(3000, function () {
    console.log('API working on port ' + 3000);
});
module.exports = app