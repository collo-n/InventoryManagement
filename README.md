
# Inventory Management System

## Overview
The Inventory Management System is a full-stack application designed to manage inventory items. It features a robust ASP.NET Web API backend and an Angular frontend. This system supports basic CRUD operations for managing inventory items including adding, updating, deleting, and viewing items.

## Technology Stack
- **Backend**: ASP.NET Web API, SQL Server
- **Frontend**: Angular, HTML, CSS, Bootstrap
- **Data Access**: Entity Framework Core, Dapper, or ADO.NET (based on developer preference)

## Features
- Display a list of inventory items.
- Create a new inventory item.
- Edit an existing inventory item.
- Delete an inventory item.
- Basic form validation.

## Getting Started

### Prerequisites
- .NET Core 3.1 or later
- Angular CLI
- SQL Server
- Node.js and npm

### Backend Setup
1. Navigate to the backend project directory.
2. Restore necessary packages:
   ```
   dotnet restore
   ```
3. Update the database:
   ```
   dotnet ef database update
   ```
4. Run the backend server:
   ```
   dotnet run
   ```

### Frontend Setup
1. Navigate to the frontend project directory.
2. Install npm packages:
   ```
   npm install
   ```
3. Start the Angular development server:
   ```
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

## API Endpoints
- `GET /api/items`: Retrieve all inventory items.
- `GET /api/items/{id}`: Retrieve an inventory item by ID.
- `POST /api/items`: Create a new inventory item.
- `PUT /api/items/{id}`: Update an existing inventory item.
- `DELETE /api/items/{id}`: Delete an inventory item.

## Database Schema
### InventoryItems Table
- **ItemID**: Unique identifier for each item (Primary Key).
- **Name**: Name of the item.
- **Description**: Description of the item.
- **Quantity**: Quantity of the item in stock.
- **Price**: Price of the item.

## Testing
Run the following command in the backend project directory to execute tests:
```
dotnet test
```

