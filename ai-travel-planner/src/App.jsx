import "./index.css";
import Hero from "./components/custom/Hero";
import Footer from "./components/custom/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
