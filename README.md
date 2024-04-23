<h1>AssetTracker API REST :globe_with_meridians:</h1>

<h3>Overview</h3>
This project is a backend application developed for ACME, providing APIs for managing company assets, developers, and users. The application handles CRUD operations for assets, developers, and users, and includes authentication to validate user login.

<h3>Features</h3>
<h4>API Endpoints:</h4>
<h4>Assets:</h4>
CRUD operations for assets.
<h4>Developers:</h4>
CRUD operations for developers.
Ability to assign assets to developers.
<h4>Users:</h4>
CRUD operations for users.
<h4>Authentication to validate user login.</h4>
Installation and Usage

<h3>Installation :gear:</h3>
The project can be installed and run in two different ways: using npm directly or via Docker.

<h4>Installation with npm</h4>

Clone the repository:
git clone <REPOSITORY_URL>
Navigate to the project directory:
cd project_name
Install dependencies:
npm install
Run the project:
npm start
This will start the backend server and frontend in development mode.

<h4>Installation with Docker</h4>

Clone the repository:
git clone <REPOSITORY_URL>
Navigate to the project directory:
cd project_name
Build the Docker image:
docker build -t image_name .
Run the container:
docker run -p 3000:3000 image_name

This will start the Docker container and run the application on port 3000.

<h3>Usage :computer:</h3>
Once the application is installed and running, you can access it from your web browser by visiting http://localhost:3000 (or the port where the application is configured).

<h3>Technologies Used</h3>
<h4>Postgres</h4>
<h4>TypeORM</h4>
<h4>Express</h4>
