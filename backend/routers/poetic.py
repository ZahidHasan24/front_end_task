from fastapi import APIRouter
from models import Message
from assistants.poetic import get_poetic_response

router = APIRouter()

@router.post("/chat/poetic")
async def chat_poetly(msg: Message):
    response = get_poetic_response(msg.message)
    return {"response": response}
