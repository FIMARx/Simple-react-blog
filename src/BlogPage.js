import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

function BlogPage({ blogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={`Blog ${blog.id}`} />
      <p>{blog.content}</p>
      {/* Additional content for the individual blog page */}
      <button className="buttonback" onClick={goBack}><i class="fa-solid fa-circle-arrow-left"></i> Go Back</button>
    </div>
  );
}

export default BlogPage;