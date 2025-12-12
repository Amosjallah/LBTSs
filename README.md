# LAD Brothers Transport Services - Frontend

This is the frontend application for LAD Brothers Transport Services, built with React, Vite, and Tailwind CSS. It is a single-page application (SPA) optimized for deployment on Vercel.

## Features
- Modern, responsive design using Tailwind CSS.
- Service catalog and fleet showcase.
- Contact and Booking forms (Client-side simulation).
- AI Assistant powered by Google Gemini API.

## Project Structure
- `src/`: Contains all frontend source code (components, pages, services).
- `backend/`: (Optional/Deprecated) If present, this folder contains a reference backend implementation. **It is not used by the Vercel deployment** and can be safely ignored or deleted if you are only hosting the frontend.

## Setup & Development
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run Development Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment
This project is configured for Vercel.
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variables:**
  - `API_KEY`: Your Google Gemini API Key.
