const express = require('express');
const taskRouter = require("./routes/tasks");
const port = 3000;
const app = express();
app.use(express.json());
app.use('/tasks', taskRouter)

const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];
app.get("/", (req,res)=>{
    res.send("server is running...");
})

app.locals.tasks = tasks;
app.listen(port, ()=>{
    console.log("server is running on port : ", port);
})