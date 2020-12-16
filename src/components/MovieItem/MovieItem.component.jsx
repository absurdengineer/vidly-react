import React from 'react'
import Button from '../Button/Button.component'
import Like from '../Like/Like.component'

const MovieItem = props => {
    const {title, numberInStock, dailyRentalRate, genre, liked} = props.movie
    const {handleDelete, handleLike} = props
    return (
        <tr>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td style={{cursor: 'pointer'}}><Like liked={liked} handleLike={handleLike} movie={props.movie}/></td>
            <td>
                <Button
                onClick={() => handleDelete(props.movie)}
                className="btn btn-danger"
                >
                Delete
                </Button>
            </td>
        </tr>
     );
}
 
export default MovieItem;