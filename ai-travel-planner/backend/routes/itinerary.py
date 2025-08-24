import openai
print(openai.__version__)

from fastapi import APIRouter
import os
from dotenv import load_dotenv

load_dotenv()  # Load API keys from .env file

router = APIRouter()

openai.api_key = os.getenv("OPENAI_API_KEY")  # Set your OpenAI API key

@router.get("/generate")
def generate_itinerary(country: str, city: str, days: int, budget: int):
    prompt = f"""
    Create a detailed travel itinerary for {days} days in {city}, {country}.
    The budget is ${budget} per day. Suggest morning, afternoon, and evening activities.
    Recommend hotels, food places, and transport options. Make it engaging and well-structured.
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": "You are a travel planner AI."},
                  {"role": "user", "content": prompt}],
        temperature=0.7
    )

    itinerary = response["choices"][0]["message"]["content"]
    return {"City": city, "Country": country, "Days": days, "Budget": f"${budget} per day", "Plan": itinerary}
