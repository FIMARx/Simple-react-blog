import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} WHATEVER'S BLOGS</p>
    </footer>
  );
}

export default Footer;
