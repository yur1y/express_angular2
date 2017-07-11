
import * as express from 'express'

import {PostRoutes} from './PostRoutes'

export class Routes {

    get routes() {
        const app = express();

        //  '/api'
        app.use("/", new PostRoutes().routes);
        
        return app;
    }
}