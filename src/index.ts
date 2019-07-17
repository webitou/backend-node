//import fetch from 'node-fetch';
import * as express from 'express';

import * as bodyParser from 'body-parser';

import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as hpp from 'hpp';
import * as compress from 'compression';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

const PORT= 8080;
const HOST= '0.0.0.0';

// APP
const app = express();

// ADD MIDDLEWARES
// app.use( bodyParser( { limit: '24M'} ) );
// app.use( ( req, res, next ) => {
//     console.log( 'My first Middelware' );
//     next();
// })
app.use( bodyParser.json() )
    .use( helmet() )
    .use( morgan('dev') )
    .use( hpp() )
    .use( compress() )
    .use( cors( { optionsSuccessStatus: 200} ) )
    .use( cookieParser() );


// ROUTES
//app.get( '/', ( req, res ) => {   // EXEMPLE TEST
 const rootHandler = ( req, res ) => {
    console.log( 'root Route' );
    res.send( { message: 'Welcome to my API' } );
};
app.get( '/', rootHandler);

app.post( '/', ( req, res ) => {
    console.log( req.body);
    res.send( req.body )
})

// EXEMPLE TEST
// app.get( '/toto', ( req, res ) => {
//     res.send( 'toto' );
// });
// app.get( '/html', ( req, res ) => {
//     res.send( '<html><head></head><body><h1>Hello</h1></body></html>' );
// });


app.listen( PORT, HOST );

console.log( `Server on : ${HOST}:${PORT} `);