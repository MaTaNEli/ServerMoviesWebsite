import * as express from 'express';
import * as controller from '../controller/tvShows'
import * as verify from '../token/verifyToken';

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/:url/:page', verify.connect, controller.getTvShows);

// ----------- Auth Delete Routes -----------

export default router;