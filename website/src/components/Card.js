import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor (props) {
        super(props)
        this.state = {isHovered: false}
    }

    handleMouseOver (event) {
        this.setState ({isHovered: true})
    }

    handleMouseOut (event) {
        this.setState ({isHovered: false})
    }

    render () {
        let hoveredImage = this.state.isHovered ? "-white" : "" ;
        return (
            <div className="Card" onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut = {this.handleMouseOut.bind(this)}>
                <div className="Contents">
                    <img src={require("../" + this.props.image1 + hoveredImage + ".svg")} />
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default Card