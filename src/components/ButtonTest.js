import React from 'react';

export default class ButtonTest extends React.Component{

    constructor(porps){
        super(porps)
        this.state = {
            buttonText:"点我呀"
        }
    }
    handleClick(){
        this.props.handleClick("this is newValue")
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>
        )
    }
}
