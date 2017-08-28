
import * as express from 'express'
 
import {PostBusiness} from '../app/business/PostBusiness'
import {BaseController as IBaseController} from './BaseController'
import {PostModel as IPostModel} from '../app/model/interfaces/PostModel'

export class PostController implements IBaseController <PostBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            const post: IPostModel = <IPostModel>req.body;
            const postBusiness = new PostBusiness();
            postBusiness.create(post, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            const post: IPostModel = <IPostModel>req.body;
            const _id: string = req.params._id;
            const postBusiness = new PostBusiness();
            postBusiness.update(_id, post, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const postBusiness = new PostBusiness();
            postBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            const postBusiness = new PostBusiness();
            postBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const postBusiness = new PostBusiness();
            postBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findByTag(req: express.Request, res: express.Response): void {
        try {

            const tag: string = req.params.tag;
            const postBusiness = new PostBusiness();
            postBusiness.findByTag(tag, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    distinctTags(req:express.Request,res:express.Response):void {
        try {

            const postBusiness =new PostBusiness();
            postBusiness.distinctTags((error, result)=>{
                if(error)res.send({"error":"error"});
                else res.send(result);
            });
        }catch(e){
            console.log(e);
            res.send({"error":"error in your request"});
        }
    }
}