import React from 'react'
import Button from '../Button/Button.component'

const MovieForm = ({match, history}) => {
    return ( 
        <div>
            <h1>MovieForm : {match.params.id} </h1>
            <Button className='btn btn-primary' onClick={ () => history.push('/movies')}>Save</Button>
        </div>
     );
}

export default MovieForm;