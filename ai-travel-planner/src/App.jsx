import "./index.css";
import Hero from "./components/custom/Hero";
import Footer from "./components/custom/Footer"; // ✅ Import your footer

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Hero />
      <Footer />  {/* ✅ Render the footer */}
    </div>
  );
}

export default App;
