let React = require('react');
let HolloTest;
HolloTest = React.createClass({
    render: function () {
        let style = {"color":"blue","fontSize":"24px"};
        return (
            <div style={style}>
                hello,this is my first demo!
            </div>
        );
    }
});

module.exports = HolloTest;