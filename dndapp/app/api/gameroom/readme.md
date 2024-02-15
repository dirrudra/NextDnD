# API Documentation

This repository contains code for an API that handles CRUD operations for a game room database. It includes endpoints for creating, updating, and deleting game room records.

## Endpoints

### Create a Game Room

- **URL:** `/api/gameroom`
- **Method:** `POST`
- **Request Body:**
  - `gameid`: ID of the game associated with the room.
  - `useremail`: Email of the user joining the room.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "okay" }`
- **Error Responses:**
  - **Code:** 500
    - **Content:** `{ "error": "Error message", "message": "error" }`
  - **Code:** 200
    - **Content:** `{ "message": "user exists" }` (if user already exists in the room)
  - **Code:** 200
    - **Content:** `{ "message": "room filled" }` (if the room is already filled)

### Delete a Game Room

- **URL:** `/api/gameroom`
- **Method:** `DELETE`
- **Request Body:**
  - `id`: ID of the game room to delete.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "okay" }`
- **Error Response:**
  - **Code:** 500
    - **Content:** `{ "error": "Error message", "message": "error" }`

### Get All Game Rooms

- **URL:** `/api/gameroom`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "GET ROUTE API CALLED - GAME ROOM", "result": [Array of game rooms] }`
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
