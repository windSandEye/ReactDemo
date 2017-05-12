import React from 'react';

export default class RuleDemo1 extends React.Component{
    render(){
        return (
            <div>
                <ol>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }
                </ol>
                <div>I am is props name:{this.props.name}</div>
            </div>
        )
    }
}