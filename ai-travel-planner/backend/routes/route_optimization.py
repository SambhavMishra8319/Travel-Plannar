from fastapi import APIRouter, HTTPException
from models.tsp_solver import solve_tsp
from pydantic import BaseModel, Field
from typing import List
from backend.models.tsp_solver import solve_tsp

from backend.models.tsp_solver import solve_tsp
router = APIRouter()

# Request Model for input validation
class RouteRequest(BaseModel):
    locations: List[str] = Field(..., min_items=2, description="List of locations (at least 2 required)")

@router.post("/optimize-route")
async def optimize_route(request: RouteRequest):
    """
    Optimize the travel route using the Traveling Salesman Problem (TSP) algorithm.
    """
    try:
        optimized_route = solve_tsp(request.locations)
        if not optimized_route:
            raise HTTPException(status_code=500, detail="Failed to optimize the route")

        return {"optimized_route": optimized_route}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error optimizing route: {str(e)}")
