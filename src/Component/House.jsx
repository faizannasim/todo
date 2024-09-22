import React from 'react';

function House() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="printify-logo.png" alt="Printify Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use-cases</a></li>
            <li><a href="#">Need help?</a></li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="btn">Log in</button>
          <button className="btn">Sign up</button>
        </div>
      </header>
      <main className="main">
        <div className="hero">
          <div className="hero-text">
            <h1>Create and sell custom products</h1>
            <ul className="features">
              <li>✓ 100% Free to use</li>
              <li>✓ 900+ High-Quality Products</li>
              <li>✓ Largest global print network</li>
            </ul>
            <div className="actions">
              <button className="btn">Start for free</button>
              <button className="btn">How it works?</button>
            </div>
            <p className="trust">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="hero-image">
            <img src="t-shirt-mockup.png" alt="T-Shirt Mockup" />
          </div>
        </div>
      </main>
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default House;