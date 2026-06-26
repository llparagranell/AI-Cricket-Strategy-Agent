from pydantic import BaseModel
from typing import List


class ChatResponse(BaseModel):
    answer: str
    sources: List[str]


class IngestResponse(BaseModel):

    message: str

    documents: int

    chunks: int