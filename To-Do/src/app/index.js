let React = require('react');
let ReactDOM = require('react-dom');

//Create a component
let TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Heading Test</h1>
        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-div'));


//append newly created React component to DOM with React