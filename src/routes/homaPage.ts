import * as express from 'express';
import * as controller from '../controller/homePage'
import * as verify from '../token/verifyToken';

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/', controller.getHomePage);

// ----------- Auth Delete Routes -----------

export default router;