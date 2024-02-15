# API Documentation

This repository contains code for an API that handles CRUD operations for a game database. It includes endpoints for creating, updating, and deleting game records.

## Endpoints

### Create a Game

- **URL:** `/api/game`
- **Method:** `POST`
- **Request Body:**
  - `imageurl`: URL of the game's image.
  - `story`: Description or story of the game.
  - `name`: Name of the game.
  - `rules`: Rules or instructions for playing the game.
  - `createdby`: Email of the creator of the game.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "okay" }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "Error message", "message": "error" }`

### Update a Game

- **URL:** `/api/game`
- **Method:** `PUT`
- **Request Body:**
  - `id`: ID of the game to update.
  - `imageurl`: Updated URL of the game's image.
  - `story`: Updated description or story of the game.
  - `rules`: Updated rules or instructions for playing the game.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "okay" }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "Error message", "message": "error" }`

### Delete a Game

- **URL:** `/api/game`
- **Method:** `DELETE`
- **Request Body:**
  - `id`: ID of the game to delete.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "okay" }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "Error message", "message": "error" }`

## Setup and Usage

1. Clone this repository to your local machine.
2. Install dependencies by running `pnpm install`.
3. Run the server using `pnpm dev`.
4. You can now make requests to the API endpoints described above.

## Dependencies

- `drizzle-orm`: A lightweight object-relational mapper (ORM) for Node.js.
- `next/server`: A utility library for handling server-side rendering in Next.js.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
