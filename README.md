# RBAC Dashboard

## Overview

The **RBAC (Role-Based Access Control) Dashboard** is a web application that allows administrators to manage user roles and permissions within an organization. It provides a user-friendly interface for managing users, defining roles, assigning permissions, and ensuring secure access control across different levels of users. This application is built using **React** and leverages **local storage** for data persistence.

## Key Features

- **User Management**:
  - View, add, edit, and delete users.
  - Assign roles to users based on their responsibilities.
- **Role Management**:

  - Create and manage roles, such as **Admin**, **Editor**, and **Viewer**.
  - Define specific permissions for each role, controlling what users can access and modify.

- **Permission Management**:
  - Fine-grained control over user permissions, including enabling/disabling specific actions for each role (e.g., creating or deleting content, viewing data).
- **Search Functionality**:

  - Easily search users by **name**, **mobile number**, or **role** to quickly locate specific users.

- **Responsive Design**:
  - The dashboard is designed to work seamlessly on both **desktop** and **mobile** devices, ensuring accessibility for all users.

## Technologies Used

- **React**: A JavaScript library for building dynamic user interfaces.
- **Styled Components**: A modern CSS-in-JS solution to style components using tagged template literals.
- **Material UI**: A popular React component library that follows **Material Design** principles.
- **Vite**: A fast build tool and development server for React applications, providing a superior developer experience.
- **Local Storage**: Persistent client-side storage used to save user, role, and permission data across sessions.

## Setup Instructions

To set up the project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/Anamika1720/RBAC-Dashboard.git
```

2. Navigate to the Project Directory

```bash
cd rbac-dashboard
```

3. Install Dependencies
   Install the required dependencies using npm:

```bash
npm install
```

4. Run the Application
   Start the development server:

```bash
npm run dev
```

5. Access the Application
   Once the server is running, open your browser and visit:

```bash
http://localhost:3000
```
