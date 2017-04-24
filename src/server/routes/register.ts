import * as express from 'express';

import * as UserController from '../controllers/user';

let router: express.Router = express.Router();

router.route('/register').post(UserController.create);

export default router;
