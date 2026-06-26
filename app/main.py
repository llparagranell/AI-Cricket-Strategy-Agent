from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.chat import router as chat_router
from app.routes.ingest import router as ingest_router

app = FastAPI(
    title="AI Cricket Strategy Agent",
    description="RAG-powered Cricket Strategy Assistant using Groq + LangChain + Tavily + ChromaDB",
    version="1.0.0",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health Check
@app.get("/")
async def root():
    return {
        "message": "AI Cricket Strategy Agent API is running 🚀"
    }

# Register Routes
app.include_router(chat_router)
app.include_router(ingest_router)