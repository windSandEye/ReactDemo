import React from 'react';
import ButtonTest from './ButtonTest.js'

export default class RuleDemo3 extends React.Component{

    constructor(props){
        super(props)
        this.state = {value:"defaultState",enable:false}
    }
    handleClick(newValue){
        this.setState({enable:false})
        this.props.brothercommunication(1);
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    render(){
        return (
            <div>
                <input type="text" value={this.props.inputValue}
                       onChange={this.handleChange.bind(this)}
                       readOnly={this.state.enable}/>
                <ButtonTest handleClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}
