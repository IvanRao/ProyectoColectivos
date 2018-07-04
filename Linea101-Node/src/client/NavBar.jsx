import React from 'react';

export default class NavBarReact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top navbar-style">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="navbar-brand" href="#">Como llego?</a>
                </li>
            </ul>
        </nav>
    );
  }
}