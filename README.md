# Store Management Application

## Overview
This is a **Store Management Application** built using **React.js** and **Context API** for state management. The application helps manage invoices, products, and other store-related functionalities efficiently.

## Features
- **Invoice Generation Portal**
  - Fetch invoices from a mock API/local JSON
  - Display invoice lists and details
  - Handle loading states
  - Calculate totals (with/without tax)

- **Product Management Portal**
  - CRUD operations (Create, Read, Update, Delete)
  - Filtering and searching functionality
  - Store filters and product details

- **Authentication**
  - User login/logout functionality (Future Implementation)

## Tech Stack
- **Frontend**: React.js, Context API
- **Styling**: CSS (`index.css`)
- **Data Handling**: Fetch API (Mock JSON or local API)

## Installation & Setup
### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Running JSON Server (If using a mock API)
```bash

npx json-server --watch db.json --port 3004
```

## Usage
- Navigate to `http://localhost:3000` to view the app.
- Ensure the backend/mock API is running for data fetching.

## Contributing
Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.

