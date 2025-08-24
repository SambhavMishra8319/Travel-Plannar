const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enables cross-origin requests

const generateItinerary = (destination, days) => {
  const activities = {
    Paris: [
      "Visit Eiffel Tower",
      "Explore Louvre Museum",
      "Walk along the Seine River",
      "Try French pastries at a local bakery",
      "Take a Seine River cruise",
    ],
    Tokyo: [
      "Visit Shibuya Crossing",
      "Explore Meiji Shrine",
      "Eat sushi at Tsukiji Market",
      "Tour the Akihabara district",
      "Visit Tokyo Disneyland",
    ],
    NewYork: [
      "See Times Square",
      "Visit the Statue of Liberty",
      "Walk in Central Park",
      "Explore the MET Museum",
      "Take a Broadway show",
    ],
  };

  const selectedActivities = activities[destination] || [
    "Explore local attractions",
    "Visit a popular museum",
    "Try the local cuisine",
    "Go on a guided tour",
    "Relax at a scenic spot",
  ];

  return {
    destination,
    days,
    itinerary: Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      activity: selectedActivities[i % selectedActivities.length],
    })),
  };
};

app.get("/api/itinerary", (req, res) => {
  const { destination = "Unknown", days = 3 } = req.query;

  if (!destination.trim() || isNaN(days) || days < 1) {
    return res.status(400).json({ error: "Invalid destination or days parameter" });
  }

  const itinerary = generateItinerary(destination, parseInt(days, 10));
  res.json(itinerary);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
