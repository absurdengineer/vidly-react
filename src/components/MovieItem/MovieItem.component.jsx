import React from 'react'
import Button from '../Button/Button.component'
import Like from '../Like/Like.component'

const MovieItem = props => {
    const {_id, title, numberInStock, dailyRentalRate, genre, handleDelete , liked, handleLike} = props
    return (
        <tr>
            <td>{title}</td>
            <td>{genre}</td>    
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>  
            <td><Like _id={_id} liked={liked} handleLike={handleLike}/></td>  
            <td><Button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete</Button></td>
        </tr>
     );
}
 
export default MovieItem;