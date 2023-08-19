import * as express from 'express';

const router = express.Router();


async function addComment(req: express.Request, res: express.Response){       
      res.status(201).json("im here");
};

// ----------- Auth Post Routes -----------
router.get('/', addComment);

export default router;