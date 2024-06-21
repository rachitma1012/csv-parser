
# CSV-PARSER
This project is a web application that allows users to upload CSV files, parse the data, and display it using the EJS template engine. The application is built with Node.js, Express.js, and uses `multer` for file uploads and `csv-parser` for parsing CSV data.

## Features

- Upload CSV files
- Parse and display CSV data in a structured format
- User-friendly interface with EJS templates

## Technologies Used

- Node.js
- Express.js
- Multer (for handling file uploads)
- csv-parser (for parsing CSV files)
- EJS (for templating)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/rachitma1012/csv-parser.git
    
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the application:**
    ```bash
    npm start
    ```

    The application will be available at `http://localhost:7200`.

## Usage

1. **Upload a CSV file:**

   - Go to `http://localhost:7200/upload`
   - Click on the "Choose File" button and select a CSV file from your computer
   - Click on the "Upload" button to submit the file

2. **View parsed data:**

   - After uploading the csv-file, a box is appeared that shows the uploaded file.
   - Upon clicking the file which contain in the box, the file is open.


