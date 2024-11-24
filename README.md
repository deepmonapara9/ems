# Employee Management System (EMS)

## Overview

The **Employee Management System (EMS)** is a React-based web application that provides functionalities for both admins and employees. It allows seamless task assignment and tracking using **localStorage** for data persistence. The application features distinct dashboards for admins and employees.

---

## Features

### Admin Side
- **Login**:
  - Admins can log in using their email and password.
- **Dashboard**:
  - View a list of employees and their task statistics:
    - Employee Name
    - New Tasks
    - Active Tasks
    - Completed Tasks
    - Failed Tasks
  - Assign new tasks to employees.
  - Monitor the progress of assigned tasks.

### Employee Side
- **Login**:
  - Employees can log in using their email and password.
- **Dashboard**:
  - View categorized tasks:
    - New Tasks
    - Accepted Tasks
    - Completed Tasks
    - Failed Tasks
  - Access detailed descriptions of tasks.
  - Update task statuses:
    - Accept a task.
    - Mark a task as completed.
    - Mark a task as failed.

---

## Usage

### Admin Login
1. Navigate to the login page.
2. Enter the admin email and password (pre-configured in the application).
3. Upon successful login, access the **Admin Dashboard**, where you can:
   - View employee task statistics.
   - Assign new tasks by selecting an employee and filling in task details.

### Employee Login
1. Navigate to the login page.
2. Enter the employee email and password (pre-configured in the application).
3. Upon successful login, access the **Employee Dashboard**, where you can:
   - View tasks categorized by status.
   - Click on a task to view its detailed description.
   - Update task statuses (accept, complete, or mark as failed).

---

## Data Management

The EMS application uses **localStorage** for managing and persisting data.

### Data Structure
#### Employees
- **Attributes**:
  - `id`: Unique identifier for the employee.
  - `firstName`: Employee's first name.
  - `email`: Employee's email.
  - `password`: Employee's login password.
  - `taskCounts`: An object to track task statuses:
    - `newTask`: Number of new tasks.
    - `active`: Number of active tasks.
    - `completed`: Number of completed tasks.
    - `failed`: Number of failed tasks.
  - `tasks`: An array of task objects with the following details:
    - `taskTitle`: Title of the task.
    - `taskDescription`: Detailed description of the task.
    - `taskDate`: Deadline or assigned date for the task.
    - `category`: Category or type of the task.
    - Status flags: `active`, `newTask`, `completed`, `failed`.

#### Admin
- **Attributes**:
  - `id`: Unique identifier for the admin.
  - `email`: Admin's email address.
  - `password`: Admin's login password.

### LocalStorage Setup
- **Initialization**: Use the `setLocalStorage()` function to initialize localStorage with default employees and admin data.
- **Access Data**: Use the `getLocalStorage()` function to fetch and manipulate data from localStorage.

---

## Technology Stack

- **Frontend**: React
- **Package Manager**: Bun
- **Styling**: Tailwind CSS
- **State Management**: React hooks and context
- **Data Persistence**: localStorage
- **Build Tool**: Bun
- **Version Control**: Git and GitHub

---

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- Bun package manager.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/deepmonapara9/ems.git
   cd ems
