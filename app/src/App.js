import React, {Component} from 'react';
import logo from './logo.svg';
import Game from './Game/Game'
import './App.css';
import './Water.css';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Code taken from: <a className="App-link" rel="noopener noreferrer" target="_blank"
                                            href={"https://www.tutorialspoint.com/reactjs"}>TutorialsPoints</a>
                    </p>
                </header>
                <div>
                    <Game/>
                </div>

            </div>

        );
    }
}

export default App;
