// 1. Modules laden en gegevens ophalen
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./router');

// 2 .App instellen
var app = express();

// 3. Middleware laden voor het parsen van JSON in het request
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// 4. Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static('public'));
app.use("/node_modules", express.static('node_modules'));

// 5. Gebruik de Routes in ingesloten bestand
app.use('/', routes);

// 6. Start de server.
app.listen(3000, function () {
    console.log('Express app gestart op localhost:3000');
});