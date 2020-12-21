import React from 'react'

const GenreItem = ({ genre, onItemSelect, currentGenre }) => {
    return ( 
        <p 
            className={`list-group-item m-0 h5 py-3 list-group-item-action ${currentGenre === genre.id && "active" }` } 
            onClick={() => onItemSelect(genre.id)}
        >{genre.name}</p>
     );
}
 
export default GenreItem;