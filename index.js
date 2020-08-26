var express = require('express');
var Synology = require('node-synology-surveillance');

var app = express();

var syno = new Synology({
    host    : '203.74.114.224',
    user    : 'Mai',
    password: '!@#$6tfc7ygv'
});

syno.surveillance.info.get_info(function(err, data){
    if (err) throw err;
});

syno.surveillance.streaming.live_stream().
app.listen(3000);