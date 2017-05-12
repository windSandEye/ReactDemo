import React from 'react';
import HolloTest from './HolloTest.js';
import ContentTest from './ContentTest.js';
import RuleDemo1 from "./RuleDemo1";
import RuleDemo2 from "./RuleDemo2";
import RuleDemo3 from "./RuleDemo3";

export default class DemoApp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            inputValue1:"I'm input one",
            inputValue2:"I'm input two"
        }
    }
    brothercommunication(index){
        if(index == 0){//第一个按钮
            this.setState({inputValue2:"兄弟，我支配你"})
        }else{//第二个按钮
            this.setState({inputValue1:"兄弟，你归我管"})
        }
    }

    render(){
        return (
            <div>
                <HolloTest/>
                <ContentTest/>
                <RuleDemo1 name="test">
                    <h1>my is child one</h1>
                    <h1>my is child two</h1>
                </RuleDemo1>
                <RuleDemo2 brothercommunication={this.brothercommunication.bind(this)} inputValue={this.state.inputValue1}/>
                <RuleDemo3 brothercommunication={this.brothercommunication.bind(this)} inputValue={this.state.inputValue2}/>
            </div>
        )
    }
}