# Travel Tracker

Travel Tracker is a web application built with Node.js, Express, and PostgreSQL that allows users to track their visited countries on an interactive map.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

Travel Tracker enables users to mark countries they have visited, with the corresponding country on the map turning green.

## Features

- Track visited countries on an interactive map.
- Add new countries to your travel list.

## Getting Started

Follow the steps below to set up and run Travel Tracker locally.

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL installed and running.

### Installation

1. Clone the repository.
   
   ```bash
   git clone https://github.com/your-username/travel-tracker.git
   ```
   
2. Navigate to project directory
   
   ```bash
   cd travel-tracker
   ```
   
3. Install the dependencies
   
   ```bash
   npm install
   ```

4. Set up your PostgreSQL database and create a .env file with the following variables:

   ```env
   DB_USER=your_postgres_user
   DB_PASSWORD=your_postgres_password
   DB_HOST=your_postgres_host
   DB_PORT=your_postgres_port
   DB_DATABASE=your_postgres_database
   ```

## Usage

1. **Start the application:**

   ```bash
   npm start
   ```

2. **Open your web browser and visit [http://localhost:3000](http://localhost:3000).**
3. **Add countries you have visited, and watch the map come to life!**


Configuration
-------------

The application uses environment variables for database configuration. Update the `.env` file with your PostgreSQL credentials.

Contributing
------------

Contributions are welcome! If you have any improvements or feature suggestions, please open an issue or create a pull request.

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE.md).

Acknowledgments
---------------

-   Thanks to [Express](https://expressjs.com/) and [EJS](https://ejs.co/) for making web development in Node.js easier.
-   Special thanks to the PostgreSQL community for providing a robust database solution.
