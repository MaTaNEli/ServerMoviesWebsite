import * as express from 'express';

const router = express.Router();


async function addComment(req: express.Request, res: express.Response){
      console.log("new request")       
      res.status(201).json("im here");
};

// ----------- Auth Post Routes -----------
router.get('/', addComment);

export default router;