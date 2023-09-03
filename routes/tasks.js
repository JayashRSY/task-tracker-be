const express = require('express')

const TaskController = require('../controllers/task')
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/getTasks',
TaskController.getTasks
)
router.get('/getTask/:id',
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