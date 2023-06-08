import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function NavigationBar({ blogs }) {
  const navLinks = [
    { title: 'Home', url: '/', icon: 'fas fa-home' },
    {
      title: 'Blogs',
      url: '/blogs',
      icon: 'fas fa-blog',
      dropdown: true,
      dropdownContent: blogs.map((blog) => ({
        title: blog.title,
        url: `/blog/${blog.id}`,
      })),
    },
    { title: 'Contact Us', url: '/contact', icon: 'fas fa-address-book' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navLinks.map((link, index) => (
          <li key={index} className="navbar__item">
            {link.icon && <i className={`${link.icon} navbar__icon`}></i>}
            {link.dropdown ? (
              <div className="navbar__dropdown">
                <Link to={link.url} className="navbar__link navbar__link--dropdown">
                  {link.title}
                </Link>
                <ul className="navbar__dropdown-content">
                  {link.dropdownContent.map((item, itemIndex) => (
                    <li key={itemIndex} className="navbar__dropdown-item">
                      <Link to={item.url} className="navbar__link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={link.url} className="navbar__link">
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;