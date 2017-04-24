import * as express from 'express';

import * as TodoController from '../controllers/todo';

let router: express.Router = express.Router();

// Get all Posts
router.route('/todo/:id').get(TodoController.getTodos);

// Get one post by cuid
router.route('/todo/:id').get(TodoController.getTodo);

// Add a new Post
router.route('/todo').post(TodoController.addTodo);

// Delete a post by cuid
router.route('/todo/:id').delete(TodoController.deleteTodo);

//Update data
router.route('/todo').put(TodoController.updateTodo);

export default router;
