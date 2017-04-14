//External Dependencies
var express = require('express');
var app = express();
var path = require('path');
var pj = path.join;
var fs = require('fs');
var bodyParser = require("body-parser");
var busboy = require('connect-busboy');
var md5 = require('md5-file');

//Internal Dependencies

//Declarations
const STOREFOLDER = "store";
var filecounter = 0;
var filestore = [];

if (!fs.existsSync(pj(__dirname, STOREFOLDER)))
    fs.mkdirSync(pj(__dirname, STOREFOLDER));

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());
//app.use(bodyParser.raw());
app.use(busboy());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/upload', function (req, res) {
    req.pipe(req.busboy);
    req.busboy.on('file', function (fname, file) {
        console.log(fname);
        var curcounter = filecounter++;
        var filepath = pj(pj(__dirname, STOREFOLDER), curcounter.toString());

        var ws = fs.createWriteStream(filepath);
        file.pipe(ws);
        ws.on('close', function () {
            var curmd5 = Buffer.from(md5.sync(filepath)).toString('base64').substring(0,10);
            if (filestore[curmd5] !== undefined) {
                curcounter--;
                fs.unlinkSync(filepath);
                res.send(curmd5);
                return;
            }
            filestore[curmd5] = { number: curcounter, name: fname };
            res.send(curmd5);
        });
    });
});

app.get('/:hash', function (req, res) {
    var curmd5 = req.params.hash;
    var file = filestore[curmd5];
    if (file === undefined) {
        res.send("not found");
        return;
    }
    res.set({ "Content-Disposition": 'attachment; filename="' + file.name + '"' });
    var filepath = pj(pj(__dirname, STOREFOLDER), file.number.toString());
    res.sendFile(filepath);
});

app.listen(process.env.PORT || 8080);
