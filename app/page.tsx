
"use client";

import { useState } from "react";

const movies = [
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: "9.0",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: "8.7",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
  },
  {
    title: "The Adventure",
    year: 2024,
    genre: "Action",
    rating: "8.5",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
  },
  {
    title: "Into the Wild",
    year: 2023,
    genre: "Drama",
    rating: "8.2",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
  },
  {
    title: "Beyond Earth",
    year: 2025,
    genre: "Sci-Fi",
    rating: "8.8",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
  },
  {
    title: "The Last Journey",
    year: 2024,
    genre: "Drama",
    rating: "8.1",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
  },
  {
    title: "Wild Chase",
    year: 2025,
    genre: "Action",
    rating: "8.4",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600",
  },
  {
    title: "Midnight Story",
    year: 2023,
    genre: "Comedy",
    rating: "7.9",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
  },
];

const categories = ["All", "Action", "Drama", "Sci-Fi", "Comedy"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || movie.genre === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          CINE<span>MAX</span>
          <small>+</small>
        </a>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#trending">Movies</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-right">
          <a href="#trending" className="signin">Sign In</a>
          <a href="#trending" className="join-btn">Join Free</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="featured-label">
            <span className="live-dot"></span>
            YOUR WORLD OF ENTERTAINMENT
          </div>

          <h1>
            MOVIES THAT
            <br />
            MOVE <span>YOU.</span>
          </h1>

          <p>
            Discover incredible stories, unforgettable characters
            and the biggest Hollywood entertainment.
            Your next favorite movie starts here.
          </p>

          <div className="hero-buttons">
            <a href="#trending" className="primary-btn">
              ▶ Explore Movies
            </a>
            <a href="#categories" className="secondary-btn">
              Browse Categories
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>HD</strong>
              <span>Quality</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Free access</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Entertainment</span>
            </div>
          </div>
        </div>
        <div className="hero-shade"></div>
      </section>

      <section className="content-section" id="trending">
        <div className="section-heading">
          <div>
            <span className="section-tag">HANDPICKED FOR YOU</span>
            <h2>Trending <span>Now</span></h2>
          </div>
          <span className="movie-count">
            {filteredMovies.length} Movies
          </span>
        </div>

        <div className="search-area">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-list" id="categories">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item ? "category active" : "category"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <article className="movie-card" key={movie.title}>
              <div
                className="movie-poster"
                style={{ backgroundImage: `url("${movie.image}")` }}
              >
                <span className="rating">★ {movie.rating}</span>
                <div className="poster-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div>
                  <span>{movie.year}</span>
                  <span className="movie-genre">{movie.genre}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="empty-message">
            No movies found. Try another search.
          </p>
        )}
      </section>

      <section className="free-banner" id="about">
        <div>
          <span className="section-tag">ENTERTAINMENT WITHOUT LIMITS</span>
          <h2>Great Movies. <span>Zero Cost.</span></h2>
          <p>
            Discover your next favorite story.
            No subscription required to explore.
          </p>
        </div>
        <a href="#trending" className="primary-btn">
          Explore Collection →
        </a>
      </section>

      <footer>
        <a href="#" className="logo">CINE<span>MAX</span><small>+</small></a>
        <p>Entertainment for everyone.</p>
        <p className="copyright">
          © 2026 CINEMAX. Movie information and imagery are
          for demonstration purposes.
        </p>
      </footer>
    </main>
  );
}
