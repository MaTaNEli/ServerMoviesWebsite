import * as express from 'express';
import * as controller from '../controller/checkValidated'

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/', controller.checkValidated);

// ----------- Auth Delete Routes -----------

export default router;