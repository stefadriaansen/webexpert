// .\routes\index.js - bestand met routes voor boeken, auteurs en login.
// Wordt ingesloten via server4.js.
var router = require('express').Router();
var automerken = require('../data/automerk.json');
var opties = require('../data/opties.json');

var ownOpties = new Array();

router.get('/api', function (req, res) {
    var msg = '<h1>Express API</h1>';
    msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
    msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
    res.send(msg);
});

// 6a. Retourneer auteurs
router.get('/api/automerken', function (req, res) {
    res.json(automerken);
});

// 6b. Retourneer boeken
router.get('/api/opties', function (req, res) {
    res.json(opties);
});

router.get('/api/ownOpties', function (req, res) {
    res.json(ownOpties);
});

router.get('/api/emptyOwnOpties', function (req, res) {
    ownOpties.length = 0;
    res.json(ownOpties);
});
/*
// 6c. Retourneer specifiek boek, op basis van ID
router.get('/api/boeken/:id', function (req, res) {
    var id = req.params.id;
    var gezochtBoek;
    boeken.forEach(function (boek) {
        if (boek.id === parseInt(id)) {
            gezochtBoek = boek;
        }
    });
    // Boek niet gevonden
    if (!gezochtBoek) {
        gezochtBoek = {
            error: 'Boek niet gevonden'
        }
    }
    res.json(gezochtBoek);
});
*/
// 7. Een POST-request verwerken


router.post('/api/ownOpties', function (req, res) {
    // verwerk binnenkomende request. We gaan er van uit
    // dat de parameter 'username' en 'email' aanwezig zijn.
    // TODO: error checking!
    var ownOptie = {};
    console.log(req.body);
    ownOptie.optie = req.body.optie;
    ownOptie.prijs = req.body.prijs;

    // Echo het user-object naar de client
    ownOpties.push(ownOptie);
    res.json(ownOpties);
});

module.exports = router;