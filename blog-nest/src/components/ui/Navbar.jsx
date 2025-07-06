import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <Link to="/" className="text-lg font-bold">
        📝 Blog Viewer
      </Link>
    </nav>
  );
}

// This component renders a navigation bar with a link to the home page.  