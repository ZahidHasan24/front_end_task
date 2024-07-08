from pydantic import BaseModel

class LoginRequest(BaseModel):
    username: str
    password: str

class Message(BaseModel):
    message: str
