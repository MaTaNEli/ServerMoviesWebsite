import * as express from 'express';
import * as controller from '../controller/detaiedMovie'
import * as verify from '../token/verifyToken';

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/:id', verify.connect, controller.getDetailedMovie);

// ----------- Auth Delete Routes -----------

export default router;