import React from 'react';

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview.slice(0, 100)}...</p>
      <button onClick={() => onToggleFavorite(movie.id)}>
        {isFavorite ? '⭐ 已收藏' : '☆ 收藏'}
      </button>
    </div>
  );
}
