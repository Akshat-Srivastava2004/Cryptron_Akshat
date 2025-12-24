# Authentication System
A full-stack authentication system built using .NET 8 and React that provides secure user registration, login, and JWT-based authentication with protected API endpoints.

# Overview
The project is divided into two parts:

1-AuthBackend – ASP.NET Core Web API handling authentication and authorization

2-AuthFrontend – React application providing a simple and responsive user interface

# Features
1-User registration and login using email and password

2-JWT-based stateless authentication

3-Secure password hashing with ASP.NET Core Identity

4-Database operations using Entity Framework Core and SQL Server

5-RESTful APIs with Swagger documentation

6-Responsive frontend built with React and Material-UI

# Tech Stack
Backend:
.NET 8
ASP.NET Core Web API
Entity Framework Core
SQL Server
ASP.NET Core Identity
JWT Authentication

Frontend:
React
Material-UI
Axios
React Router

# Setup Instructions
Clone the repository

git clone https://github.com/Akshat-Srivastava2004/Cryptron_Akshat.git
cd Authentication-System-

Backend Setup:
cd AuthBackend
dotnet restore
dotnet ef database update
dotnet run


Frontend Setup:
cd AuthFrontend
npm install
npm run dev


# Security
Password hashing using ASP.NET Core Identity
JWT token-based authentication
Input validation on client and server
CORS configuration and HTTPS support
<img width="1918" height="861" alt="Screenshot 2025-12-24 131548" src="https://github.com/user-attachments/assets/4ea304f7-7578-4fc5-a456-06311c8a2001" />

Frontend can be deployed as a static build using npm run build#
