import React from 'react';

export default class RuleDemo2 extends React.Component{

    constructor(props){
        super(props)
        this.state = {enable:false}
    }
    componentDidMount(){//组件生命周期
        this.setState({enable:true})
    }
    handleClick(){
        this.setState({enable:false})
        this.props.brothercommunication(0);
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    };
    render(){
        return (
            <div>
                <input type="text" value={this.props.inputValue}
                       onChange={this.handleChange.bind(this)}
                       readOnly={this.state.enable}/>
                <button onClick={this.handleClick.bind(this)}>点我啊</button>
                <div>{this.props.maxLoops}</div>
            </div>
        )
    }
}
