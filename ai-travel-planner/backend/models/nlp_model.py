from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import torch

class AITravelItinerary:
    def __init__(self, model_name="google/flan-t5-large"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)

        try:
            self.model = AutoModelForSeq2SeqLM.from_pretrained(model_name).to(self.device)
            if self.device == "cuda":
                self.model = self.model.half()  # Convert to half-precision for faster inference
        except Exception as e:
            raise RuntimeError(f"Error loading model: {e}")

    def generate_itinerary(self, destination: str, days: int, preferences: str) -> str:
        prompt = f"Create a {days}-day itinerary for {destination}. Preferences: {preferences}."
        
        # Tokenization
        inputs = self.tokenizer(prompt, return_tensors="pt", truncation=True, padding=True).to(self.device)

        # Generate text with no_grad() for efficiency
        with torch.no_grad():
            outputs = self.model.generate(
                **inputs, 
                max_length=300, 
                num_return_sequences=1, 
                temperature=0.8,  # More diverse responses
                top_k=50,
                top_p=0.95
            )

        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
