import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

def get_weather(city, units="metric"):
    """
    Fetches the current weather for a given city.
    
    :param city: City name (e.g., "New York")
    :param units: Unit system ("metric" for Celsius, "imperial" for Fahrenheit, "standard" for Kelvin)
    :return: Dictionary with structured weather data or error message
    """
    if not API_KEY:
        return {"error": "API key is missing. Set OPENWEATHER_API_KEY in .env"}

    params = {
        "q": city,
        "appid": API_KEY,
        "units": units
    }
    
    try:
        response = requests.get(BASE_URL, params=params)
        data = response.json()

        # Check for API errors
        if response.status_code != 200:
            return {"error": data.get("message", "Unknown error")}

        # Extract relevant weather details
        weather_data = {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "weather": data["weather"][0]["description"].capitalize(),
            "wind_speed": data["wind"]["speed"]
        }
        return weather_data

    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {str(e)}"}
