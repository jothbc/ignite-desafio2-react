import React from 'react';
import { Button } from './Button';
import { GenreResponseProps } from './Content';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  callbackChangeGenres(id: number): void;
}

const SideBar: React.FC<SideBarProps> = ({ genres, selectedGenreId, callbackChangeGenres }) => {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => callbackChangeGenres(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
export default SideBar;