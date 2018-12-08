// grab the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request')
// var cors = require('cors');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(cors())

var port = process.env.PORT || 8080;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes will go here
app.post('/api/mailchimp', function (req, res) {
    console.log(req.body.sign)
    let sendBody; 
    request.post('https://us19.api.mailchimp.com/3.0/lists/ace1c561d7/members', {
        headers: { 'Authorization': 'apikey 486f5627f6042b7a2d30d90516aabe5d-us19' },
        json: {
            email_address: req.body.email,
            status: "subscribed", 
            merge_fields: {
                SIGN: req.body.sign,
            }
        }
    }, (error, res, body) => {
        if (error) {
            console.error(error)
            sendBody = error
            // res.send(error)
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        sendBody = body
        // res.send(body);
    })
    res.send(sendBody)
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
