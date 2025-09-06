import "./index.css";
import Hero from "./components/custom/Hero";
import Footer from "./components/custom/Footer";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header/Hero Section */}
        <Hero />
        
        {/* Main Content Area */}
       

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;