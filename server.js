const express = require('express');
const taskRouter = require("./src/routes/tasks");  // Updated path
const port = 3000;
const app = express();
app.use(express.json());
app.use('/tasks', taskRouter);
// Assignment 3: Mount task/:id route
app.use('/task', taskRouter);

// Updated tasks array with 5 tasks including priority and createdAt
const tasks = [
  { 
    id: 1, 
    title: 'Complete CSE 362 Assignment', 
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-11-15')
  },
  { 
    id: 2, 
    title: 'Study REST API principles', 
    completed: true,
    priority: 'medium',
    createdAt: new Date('2024-11-14')
  },
  { 
    id: 3, 
    title: 'Practice Postman testing', 
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-11-16')
  },
  { 
    id: 4, 
    title: 'Review Express middleware', 
    completed: false,
    priority: 'low',
    createdAt: new Date('2024-11-13')
  },
  { 
    id: 5, 
    title: 'Setup MySQL database', 
    completed: false,
    priority: 'medium',
    createdAt: new Date('2024-11-17')
  }
];

app.get("/", (req,res)=>{
    res.send("server is running...");
})

// Assignment 2: Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.locals.tasks = tasks;
app.listen(port, ()=>{
    console.log("server is running on port : ", port);
})