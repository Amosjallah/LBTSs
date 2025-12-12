# LAD Brothers Transport API

## Setup

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Database Setup**
   - Ensure MySQL is running.
   - Create the database `lad_transport_db`.
   - Run the SQL script located at `src/utils/schema.sql` in your MySQL client (Workbench, phpMyAdmin, or CLI) to create the tables.

3. **Configuration**
   - Copy `.env.example` to `.env`
   - Update `DB_PASS` with your MySQL password.

4. **Run Server**
   ```bash
   npm run dev
   ```

## API Documentation

Base URL: `http://localhost:5000/api/v1`

### Auth
- POST `/auth/register` - { name, email, password, phone }
- POST `/auth/login` - { email, password }
- GET `/auth/me` - (Protected)

### Resources (CRUD)
- `/vehicles`
- `/bookings`
- `/drivers`
- `/contracts`
- `/school-transport`
- `/tours`

**Headers:**
For protected routes, send `Authorization: Bearer <token>`
