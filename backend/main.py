from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, poetic, grumpy

app = FastAPI()

origins = [
    "http://localhost:5173",  
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth.router)
app.include_router(poetic.router)
app.include_router(grumpy.router)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
