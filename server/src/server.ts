import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'

import {Routes} from './config/routes/Routes'

const port: number = Number(process.env.PORT) || 3000;
const env:string = process.env.NODE_ENV || 'developement';

const app = express();

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

app.use(bodyParser.json());
app.use('/', new Routes().routes);

const renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
}

app.get('/*', renderIndex);

if(env === 'developement'){
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction)=> {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}


// catch 404 and forward to error handler
app.use( (req: express.Request, res: express.Response, next)=> {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use( (err: any, req: express.Request, res: express.Response, next: express.NextFunction)=> {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }