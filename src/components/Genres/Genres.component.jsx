import React from 'react'
import GenreItem from '../GenreItem/GenreItem.components';

const Genres = ({genres, onItemSelect, currentGenre}) => {
    return ( 
        <div style={{cursor: 'pointer'}} className="list-group" id="list-tab" role="tablist">
            <p className={`list-group-item m-0 h5 py-3 list-group-item-action ${currentGenre === '' && "active" }` } 
            onClick={() => onItemSelect('')}
        >All Genres</p>
            {genres.map((genre) => 
                <GenreItem 
                    key={genre.id} 
                    currentGenre={currentGenre} 
                    genre={genre}
                    onItemSelect={onItemSelect}
                />
            )}                
        </div>
    );
}

export default Genres;