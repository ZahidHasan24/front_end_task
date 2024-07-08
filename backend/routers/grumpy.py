from fastapi import APIRouter
from models import Message
from assistants.grumpy import get_grumpy_response

router = APIRouter()

@router.post("/chat/grumpy")
async def chat_grumpy(msg: Message):
    response = get_grumpy_response(msg.message)
    return {"response": response}
