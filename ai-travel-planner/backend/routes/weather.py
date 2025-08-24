# backend/routes/weather.py
from fastapi import APIRouter
from utils.openweather import get_weather

router = APIRouter()

@router.get("/weather")
def get_city_weather(city: str):
    return get_weather(city)
