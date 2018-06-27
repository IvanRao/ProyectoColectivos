import React from 'react';
import {render} from 'react-dom';
import Input from './Input.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className = "container-fluid">
                    <Input></Input>
                </div>
            </div>
        )   
    }
}

render(<App/>, document.getElementById('app'));