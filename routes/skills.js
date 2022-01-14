// routes/todos.js

var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/todos"

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);

//POST /skills
router.post('/', skillsCtrl.create);

//DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

//GET /posts/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

//PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;