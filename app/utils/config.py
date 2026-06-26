from dotenv import load_dotenv
import os

load_dotenv()


class Settings:

    GROQ_API_KEY = os.getenv("GROQ_API_KEY")

    TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

    MODEL_NAME = os.getenv(
        "MODEL_NAME",
        "llama-3.3-70b-versatile"
    )

    CHROMA_DB_PATH = os.getenv(
        "CHROMA_DB_PATH",
        "app/chroma_db"
    )

    COLLECTION_NAME = os.getenv(
        "COLLECTION_NAME",
        "cricket_kb"
    )

    EMBEDDING_MODEL = os.getenv(
        "EMBEDDING_MODEL",
        "sentence-transformers/all-MiniLM-L6-v2"
    )

    DISABLE_RAG = os.getenv(
        "DISABLE_RAG",
        "false"
    ).lower() in ("1", "true", "yes", "on")


settings = Settings()
