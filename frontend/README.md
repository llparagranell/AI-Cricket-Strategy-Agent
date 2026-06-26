# AI Cricket Strategy Agent Frontend

Production-ready React frontend for the FastAPI-powered AI Cricket Strategy Agent.

## Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zustand
- TanStack Query
- Framer Motion
- React Markdown
- Lucide React
- React Hot Toast
- Recharts
- React Hook Form
- clsx
- tailwind-merge

## Setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

The app defaults to:

```bash
VITE_API_URL=http://localhost:8000
```

## Backend Integration

The Strategy Agent page is wired to the existing FastAPI endpoint:

```http
POST /chat
Content-Type: application/json

{ "question": "Should India bowl first at Wankhede?" }
```

Expected response:

```json
{
  "answer": "Markdown strategy response",
  "sources": ["source one"]
}
```

The frontend also includes service functions for planned endpoints:

- `GET /health`
- `POST /analyze`
- `GET /weather`
- `GET /matches`
- `GET /knowledge`

Until those endpoints exist in the backend, the UI uses realistic local fallback data for dashboards, weather, matches, and knowledge cards.

## Pages

- Landing Page
- Dashboard
- Strategy Agent
- Match Analysis
- Weather
- Knowledge Base
- Settings

## Notes

The design uses only the requested palette:

- `#618764`
- `#2B5748`
- `#9CB080`
- `#273338`
- `#FFFFFF`
- `rgba(255,255,255,0.75)`
- `rgba(255,255,255,0.08)`
