import React, { Component } from 'react'

class Like extends Component {
    state = { className : 'fa fa-heart-o' }
    handleClick = () => {
        const {className} = this.state
        if(className === 'fa fa-heart-o') this.setState({className : 'fa fa-heart' })
        else this.setState({className : 'fa fa-heart-o' })
    }
    render() {
        const {liked, handleLike} = this.props
        let classes = "fa fa-lg fa-heart"
        if(!liked) classes += '-o'
        return (
            <i className={classes} onClick={() => handleLike(this.props.movie)}></i>
         );
    }
}
 
export default Like;