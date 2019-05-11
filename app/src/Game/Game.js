import React, {Component} from 'react';

import Grid from '../Grid/Grid'

const grid = Array(2).fill(null).map(() => Array(2).fill(null));
const DIRECTION = {
    UP: (x, y) => ({x: x, y: y - 1}),
    DOWN: (x, y) => ({x, y: y + 1}),
    LEFT: (x, y) => ({x: x - 1, y}),
    RIGHT: (x, y) => ({x: x + 1, y})
};
const CONTROLS = {
    UP: 'UP',
    DOWN: 'DOWN',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
};
const KEY_CODES_MAPPER = {
    38: 'UP',
    39: 'RIGHT',
    37: 'LEFT',
    40: 'DOWN',
};
const setSnakePosition = state => {
    const data = {
        snake: {
            position: {
               ...DIRECTION[state.currentDirection](state.snake.position.x, state.snake.position.y),
            }
        }
    };
    if (data.snake.position.x < 0) {
        data.snake.position.x = state.grid.length -1 ;
    }
    if (data.snake.position.y < 0) {
        data.snake.position.y = state.grid.length -1 ;
    }
    if (data.snake.position.x >= state.grid.length) {
        data.snake.position.x = 0;
    }
    if (data.snake.position.y >= state.grid.length) {
        data.snake.position.y = 0;
    }
    return data;
};

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDirection: CONTROLS.DOWN,
            grid: grid,
            size: 0,
            snake: {
                position: {
                    x: 0, y: 0
                }
            }
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(setSnakePosition)
        }, 300);
        window.addEventListener('keyup', this.onChangeDirection, false);
    }

    onChangeDirection = (e) => {
        if (KEY_CODES_MAPPER[e.keyCode]) {
            this.setState({currentDirection: KEY_CODES_MAPPER[e.keyCode]});
        }
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    changeGridSize = (e) => {
        const size = e.target.value !== "" ? parseInt(e.target.value) : 1;
        this.setState(
            {
                snake: {
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                size: size,
                grid: Array(size + 1).fill(null).map(() => Array(size + 1).fill(null))
            }
        );
    };

    render() {
        return (
            <div>
                <input value={this.state.size} onChange={this.changeGridSize}/>
                <Grid grid={this.state.grid} size={this.state.size} snake={this.state.snake}/>
            </div>

        );
    }
}

export default Game;
