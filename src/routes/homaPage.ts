import * as express from 'express';
import * as controller from '../controller/homePage'

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/', controller.getHomePage);

// ----------- Auth Delete Routes -----------

export default router;