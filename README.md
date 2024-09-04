A comprehensive Job Portal application built using the MERN (MongoDB, Express, React, Node.js) stack. This platform allows users to search, apply for jobs, and manage job applications, while also offering employers the ability to post and manage job listings.

Table of Contents
Features
Tech Stack
Installation
Environment Variables
API Endpoints
Usage
License
Features
User Authentication: Users can register, login, and manage their profiles.
Job Search: Search for jobs by position, company, work type, and status.
Job Management: Create, update, and delete job listings.
Job Application Tracking: Track the status of job applications (pending, interview, rejected).
Job Statistics: View detailed job statistics including monthly application trends.
Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose
Frontend: React, Axios
Authentication: JWT (JSON Web Tokens)
Styling: CSS, Bootstrap (optional)
Documentation: Swagger for API documentation
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/saurabhkr66/jobportal.git
cd jobportal
Install dependencies for both backend and frontend:

bash
Copy code
npm install
cd client
npm install
Go back to the root directory:

bash
Copy code
cd ..
Environment Variables
Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
For sending emails or using third-party services (if applicable):

makefile
Copy code
EMAIL_API_KEY=your_email_service_api_key
API Endpoints
Auth Routes
POST /api/v1/auth/register - Register a new user
POST /api/v1/auth/login - Login with email and password
Jobs Routes
GET /api/v1/jobs - Get all jobs with filters (status, workType, search, sort)
POST /api/v1/jobs - Create a new job
PUT /api/v1/jobs/:id - Update a job
DELETE /api/v1/jobs/:id - Delete a job
GET /api/v1/jobs/stats - Get job statistics
User Routes
PUT /api/v1/users/update - Update user profile
