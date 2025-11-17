const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// POST /tasks - Create a new task
router.post('/', (req, res) => {
  try {
    const { title } = req.body;

    // Input validation
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    const newTask = {
      id: Date.now(), // Simple ID (replace with auto-increment in DB)
      title: title.trim(),
      completed: false
    };

    const tasks = req.app.locals.tasks;
    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Assignment 3: GET /task/:id - Retrieve a single task by ID
router.get('/:id', (req, res) => {
  const taskId = req.params.id;
  const tasks = req.app.locals.tasks;
  
  // Find task by ID
  const task = tasks.find(t => t.id === parseInt(taskId));

  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Task not found'
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

module.exports = router;