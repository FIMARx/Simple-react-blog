import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './footer';
import BlogPage from './BlogPage';
import blog1Image from './images/blog1.jpg';
import blog2Image from './images/blog2.jpg';
import blog3Image from './images/blog3.jpg';
import blog4Image from './images/blog4.jpg';
import blog5Image from './images/blog5.jpg';
import ContactForm from './ContactForm';

const blogs = [
  {
    id: 1,
    title: 'Blog Title 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex auctor, faucibus sapien vitae, euismod nulla. Sed laoreet nibh id sapien imperdiet, ut luctus turpis egestas. Nullam vel quam in nulla iaculis pretium. Integer vel tortor nec libero luctus blandit ut euismod leo.',
    image: blog1Image,
  },
  {
    id: 2,
    title: 'Blog Title 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex auctor, faucibus sapien vitae, euismod nulla. Sed laoreet nibh id sapien imperdiet, ut luctus turpis egestas. Nullam vel quam in nulla iaculis pretium. Integer vel tortor nec libero luctus blandit ut euismod leo.',
    image: blog2Image,
  },
  {
    id: 3,
    title: 'Blog Title 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex auctor, faucibus sapien vitae, euismod nulla. Sed laoreet nibh id sapien imperdiet, ut luctus turpis egestas. Nullam vel quam in nulla iaculis pretium. Integer vel tortor nec libero luctus blandit ut euismod leo.',
    image: blog3Image,
  },
  {
    id: 4,
    title: 'Blog Title 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex auctor, faucibus sapien vitae, euismod nulla. Sed laoreet nibh id sapien imperdiet, ut luctus turpis egestas. Nullam vel quam in nulla iaculis pretium. Integer vel tortor nec libero luctus blandit ut euismod leo.',
    image: blog4Image,
  },
  {
    id: 5,
    title: 'Blog Title 5',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex auctor, faucibus sapien vitae, euismod nulla. Sed laoreet nibh id sapien imperdiet, ut luctus turpis egestas. Nullam vel quam in nulla iaculis pretium. Integer vel tortor nec libero luctus blandit ut euismod leo.',
    image: blog5Image,
  },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar blogs={blogs} /> {/* Add the NavigationBar component */}
        <header>
          <h1>
            <i className="fas fa-blog"></i> WHATEVER'S BLOGS
          </h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const Home = ({ blogs }) => {
  return (
    <>
      <div className="intro-text">
        <h2>Welcome to Whatever's Blogs!</h2>
        <p>
        <i className="fas fa-door-open"></i> Discover a collection of insightful blog posts written by our team of experts. Explore various topics and stay up-to-date with the latest trends in technology, science, and more.
        </p>
      </div>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={`Blog ${blog.id}`} />
          <p>{blog.content}</p>
          <Link to={`/blog/${blog.id}`} className="read-more-btn">
          <i class="fa-brands fa-readme"></i> Read More
          </Link>
        </div>
      ))}
    </>
  );
};

export default App;