from fastapi import APIRouter, HTTPException, status
from models import LoginRequest

router = APIRouter()

def verify_credentials(login_request: LoginRequest):
    if login_request.username != "admin" or login_request.password != "admin1234":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    return login_request.username

@router.post("/login")
def login(login_request: LoginRequest):
    username = verify_credentials(login_request)
    return username
