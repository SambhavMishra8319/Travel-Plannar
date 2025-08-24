import networkx as nx
import numpy as np
from itertools import permutations

def solve_tsp(locations, distance_matrix=None):
    """
    Solves the Traveling Salesman Problem (TSP) using NetworkX approximation.
    
    :param locations: List of location names (nodes)
    :param distance_matrix: Optional distance matrix (2D list or NumPy array)
    :return: Optimized travel route
    """
    num_locations = len(locations)
    G = nx.complete_graph(num_locations)

    # Use a given distance matrix if provided, else assign dummy weights
    if distance_matrix is not None:
        for i in range(num_locations):
            for j in range(num_locations):
                if i != j:
                    G[i][j]['weight'] = distance_matrix[i][j]
    else:
        for i in range(num_locations):
            for j in range(num_locations):
                if i != j:
                    G[i][j]['weight'] = np.random.randint(10, 100)  # Random dummy distances

    # Solve TSP using NetworkX approximation algorithm
    tsp_route = nx.approximation.traveling_salesman_problem(G, cycle=True)
    optimized_route = [locations[i] for i in tsp_route]

    return optimized_route

def calculate_shortest_route(locations, distance_matrix):
    """
    Brute-force method to calculate the exact shortest route (for small cases).
    
    :param locations: List of location names
    :param distance_matrix: 2D list or NumPy array with distances
    :return: Dictionary containing the best route and its total distance
    """
    shortest_distance = float("inf")
    best_route = None

    for perm in permutations(range(len(locations))):
        distance = sum(distance_matrix[perm[i]][perm[i+1]] for i in range(len(perm)-1))

        if distance < shortest_distance:
            shortest_distance = distance
            best_route = [locations[i] for i in perm]

    return {"route": best_route, "distance": shortest_distance}
