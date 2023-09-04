const express = require('express')

const checkAuth = require('../middleware/check-auth');
const TaskController = require('../controllers/task')

const router = express.Router();

router.get('/getTasks',
checkAuth,
TaskController.getTasks
)
router.get('/getTask/:id',
checkAuth,
TaskController.getTaskById
)
router.post('/addTask',
checkAuth,
TaskController.createTask
)
router.delete('/deleteTask/:id',
checkAuth,
TaskController.deleteTask
)
router.put('/updateTask/:id',
checkAuth,
TaskController.updateTask
)

module.exports = router