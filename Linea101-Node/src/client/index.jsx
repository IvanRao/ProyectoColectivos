import React from 'react';
import {render} from 'react-dom';

function MyButton (props){
    return (
      <button onClick={props.onToggle}>
        {props.toggle ? 'Prendido' : 'Apagado'}
      </button>
    );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <MyButton onToggle={this.handleClick} 
		toggle={this.state.isToggleOn}/>
    );
  }
}


render(<Toggle name="mundo!!"/>, document.getElementById('app'));
