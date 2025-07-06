import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data)=> {
        setPosts(data.slice(0, 20));
        setLoading(false);
      })    
    }, []);

    if (loading) return <p>Loading blogs...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Blog Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow p-4 rounded mb-4 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-2">{post.body.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="text-blue-600 font-medium">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}


// This component fetches and displays a list of blog posts from a public API.
// It uses React hooks to manage state and side effects, and it renders each post with a link to its detail page.
// The posts are displayed in a card-like format with a title, a short excerpt, and a "Read More" link.
