import sys
import os

# Get the absolute path of the project root
project_root = os.path.abspath(os.path.dirname(__file__))

# Add the project root to sys.path
sys.path.append(project_root)
sys.path.append(os.path.join(project_root, "backend"))
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import routes
from backend.routes import itinerary, route_optimization, weather, auth


# Initialize FastAPI app
app = FastAPI(
    title="AI-Powered Travel Planner",
    description="An AI-driven travel planning API with itinerary generation, route optimization, and weather forecasting.",
    version="1.0.0",
    docs_url="/docs",  # Swagger UI documentation
    redoc_url="/redoc",  # ReDoc documentation
)

# Secure CORS configuration (Replace "*" with actual frontend domains in production)
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Restrict to frontend domains
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Allow only necessary methods
    allow_headers=["Authorization", "Content-Type"],  # Restrict headers
)

# Register routes
app.include_router(itinerary.router, prefix="/itinerary", tags=["Itinerary"])
app.include_router(route_optimization.router, prefix="/routes", tags=["Route Optimization"])
app.include_router(weather.router, prefix="/weather", tags=["Weather"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/", tags=["Home"])
async def home():
    """Home route for the AI-Powered Travel Planner API."""
    return {"message": "Welcome to the AI-Powered Travel Planner API 🚀"}

# Run the application
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", 8000)),
        reload=True
    )
