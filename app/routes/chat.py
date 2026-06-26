from fastapi import APIRouter

from app.models.request_models import ChatRequest
from app.models.response_models import ChatResponse

from app.services.agent_service import agent

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post(
    "",
    response_model=ChatResponse
)
async def chat(request: ChatRequest):

    return agent.ask(
        request.question
    )