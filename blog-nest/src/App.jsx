import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetails";
import Navbar from "@/components/ui/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}


