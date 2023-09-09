import * as express from 'express';
import * as controller from '../controller/topRated'
//import * as verify from '../token/verifyToken';

const router = express.Router();
console.log(12)
// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/', controller.getTopRatedPage);

// ----------- Auth Delete Routes -----------

export default router;