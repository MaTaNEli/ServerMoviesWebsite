import * as express from 'express';
import * as controller from '../controller/detaiedMovie'

const router = express.Router();

// ----------- Auth Post Routes -----------

// ----------- Auth Get Routes -----------
router.get('/:id', controller.getDetailedMovie);

// ----------- Auth Delete Routes -----------

export default router;