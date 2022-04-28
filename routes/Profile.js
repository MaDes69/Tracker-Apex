const express = require('express')
const router = express.Router() // pour les routes
const fetch = require('node-fetch')


//app.get si fichier dans server.js
router.get('/:platform/:gamertag', async (req, res) => {
    //VERIFICATION GET DONNEE SUR POSTMAN 
    // console.log(req.params.platform, req.params.gamertag)
    // res.send('Plouc')
    try {
        //Prouver que l'app est enregistré sur Tracker Network app et recuperation des data 
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }
        const {platform, gamertag } = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, { 
            headers
        });

        const data = await response.json();
       

        //errors array 
        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
              message: 'Profil non trouvé ...'
            });
          }

        res.json(data);

    } catch (err) {
        console.error(err);
    }
});

module.exports = router;