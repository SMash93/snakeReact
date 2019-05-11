import React from 'react';
import './Cell.css';
import cs from 'classnames';

const isPosition = (x, y, newX, newY) => (x === newX && y === newY)
;

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'red',
            address: ''
        }
    }

    changeColor = async () => {
        const response = await fetch('https://api.ipdata.co?api-key=674722d032743d04fbc620c15387d6fc9a0b0282f45a7c065979846d');
        const address = await response.json();
        this.setState({
            bgColor: 'blue',
            address: `https://www.countryflags.io/${address.country_code}/shiny/16.png`
        })
    };

    render() {
        const className = cs("cellBorder", {"cell-snake": isPosition(this.props.x, this.props.y, this.props.snake.position.x, this.props.snake.position.y)});
        return (
            <td className={className}
                style={{backgroundColor: this.state.bgColor}}>
            </td>
        );
    }
}

export default Cell;