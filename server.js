//API Key = aecfd71b-c64b-405e-96df-3f63d1f2fcd7 ( tracker network )
//API URL = https://public-api.tracker.gg/v2/apex/standard   ( peut rajouter : profile/{platform}/{platformUserIdentifier} ) 


//npm run server ( ouvre server)
//npm run dev ( ouvre server et vue )

const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// ********** Load Env ********** //
dotenv.config({ path: './config.env' });


const app = express();

// ********** Profile routes ********** //
app.use( '/api/v1/profile', require('./routes/Profile'));


// Dev Logging ( log HTTP et erreurs ) pour retourner les requetes dans terminal 200/404/ etc.
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}



//PORT: 3000 , NODE_ENV: development initialiser dasn fichier .env
const port = process.env.PORT || 8000; 

//initialisation du server port 3000
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} activé sur le port ${port}`);
});