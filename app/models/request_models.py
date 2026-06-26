from pydantic import BaseModel


class ChatRequest(BaseModel):
    question: str


class IngestRequest(BaseModel):
    topic: str