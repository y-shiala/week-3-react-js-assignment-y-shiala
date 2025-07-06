
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;

  return (
    <div>
      <Link to="/" className="text-blue-500 underline">← Back to Blogs</Link>
      <div className="bg-white shadow p-6 rounded mt-4">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-800">{post.body}</p>
      </div>
    </div>
  );
}
// This component fetches and displays a single blog post based on the ID from the URL.
// It uses React hooks to manage state and side effects, and it renders the post title and body.
// A link is provided to navigate back to the list of blogs.  


