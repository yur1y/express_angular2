
import * as express from 'express'

import {PostController} from '../../controllers/PostController'

export  class PostRoutes {
    private postController: PostController;

    constructor () {
        this.postController = new PostController();
    }
    get routes () {
        const controller = this.postController;
        const router = express.Router();
        router.get("/posts", controller.retrieve);
        router.post("/posts", controller.create);
        router.put("/posts/:_id", controller.update);
        router.get("/posts/:_id", controller.findById);
        router.delete("/posts/:_id", controller.delete);
        router.get("/posts/tags/:tag",controller.findByTag);
        router.get("/tags",controller.distinctTags);

        return router;
    }


}