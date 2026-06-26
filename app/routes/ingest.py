from fastapi import APIRouter

from app.models.request_models import IngestRequest
from app.models.response_models import IngestResponse

from app.services.rag_service import rag_service

router = APIRouter(
    prefix="/ingest",
    tags=["Knowledge Base"]
)


@router.post(
    "",
    response_model=IngestResponse
)
async def ingest(request: IngestRequest):

    result = rag_service.build_knowledge_base(
        request.topic
    )

    return {
        "message": "Knowledge base updated",
        "documents": result["documents"],
        "chunks": result["chunks"]
    }