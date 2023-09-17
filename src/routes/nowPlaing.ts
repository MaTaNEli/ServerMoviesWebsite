import * as express from 'express';
import * as controller from '../controller/nowPlaying'
import * as verify from '../token/verifyToken';

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/', verify.connect, controller.getNowPlaying);

// ----------- Auth Delete Routes -----------

export default router;