import * as express from 'express';

import * as UserController from '../controllers/user';

let router: express.Router = express.Router();

router.route('/login').post(UserController.login);

export default router;
