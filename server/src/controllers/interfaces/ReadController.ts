
import * as express from 'express'

export interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;


}