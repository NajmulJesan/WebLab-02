# Task Manager RESTful API  
**CSE-362: Web Programming II Lab**  
**Lab 02: Develop RESTful API Foundations for Task Creation and Retrieval**  
**3rd Year 2nd Semester, 2024**  
**Department of Computer Science & Engineering**  
**Jahangirnagar University, Dhaka, Bangladesh**

A fully functional RESTful API built with **Node.js** and **Express.js** that supports task creation and retrieval using in-memory storage. This project demonstrates core REST principles, JSON parsing, proper HTTP status codes, error handling, and routing best practices.

**All 6 lab assignment tasks successfully completed.**

---

## Project Structure
WebLab-02/
├── server.js                # Main server file
├── package.json             # Project metadata and dependencies
├── README.md                # This file
├── tasks-response.json      # Saved GET /tasks response (Postman)
├── api-responses.txt        # Documentation of all test cases and responses
└── routes/
└── tasks.js             # All task-related routes (Router-based)

---

## Features Implemented (Lab Requirements)

| Task | Description                                                                                 | Status  |
|------|---------------------------------------------------------------------------------------------|---------|
| 1    | `GET /tasks` returns **5 initial tasks** with `id`, `title`, `completed`, `priority`, `createdAt` | Done    |
| 2    | `GET /health` endpoint returns status and server uptime                                     | Done    |
| 3    | `GET /task/:id` → returns single task or proper 404/400 errors                                | Done    |
| 4    | All task routes properly moved to `routes/tasks.js` using Express Router                     | Done    |
| 5    | Full error handling: invalid ID format → 400, task not found → 404                           | Done    |
| 6    | Complete `README.md` with setup, endpoints, and testing info                                 | Done (This file) |

---

## Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

---

## Setup & Running the Project

```bash
# 1. Clone or enter the project directory
cd WebLab-02

# 2. Install dependencies
npm install express

# 3. Start the server
node server.js
