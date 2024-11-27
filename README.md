# School Management System

A Node.js-based School Management System that allows for the management of schools through two main routes: `addSchool` and `listSchools`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [addSchool](#addschool)
  - [listSchools](#listschools)

## Installation

Follow these steps to set up the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/sahilwarkhade/Educase_Node.js_Assignment.git

2. Navigate to the project directory:
    ```bash
    cd Educase_Node.js_Assignment

3. Install the required dependencies:
    ```bash
    npm install

4. Create .env file you can use .env.example file for reference.


## Usage

1. To run the project, use the following command:
    ```bash
    npm start

## Routes

1. /addSchool:
    Method: POST
    Description: Adds a new school to the system.
    Request Body:
    ```bash
    {
        "name": "your school name",
        "address": "address of school",
        "latitude":"Put integer or float values only",
        "longitude":"Put integer or float values only"
    }
    ```
    Response :
    ```bash
    {
        "success": true,
        "message": "School added successfully",
        "schoolId": 3
    }
    ```

2. listSchools:
    Method: GET
    Description: Retrieves a list of all schools and sorted in increasing order of distance.

    Note: The distance two geographical points (latitude and longitude) calculated using Haversine formula.

    Response Structure:
    ```bash
    [
        {
            "id": 3,
            "name": "Warkhade School",
            "address": "Mumbai",
            "latitude": 77.0364,
            "longitude": 38.8951,
            "distance": 0
        },
        {
            "id": 1,
            "name": "Adarsh Highschool",
            "address": "Daryapur",
            "latitude": 38.8951,
            "longitude": 77.0364,
            "distance": 4612.126052754731
        }
    ]
    ```



    

