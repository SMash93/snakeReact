import React from 'react';
import Row from '../Row/Row.js'
import './Grid.css'

class Grid extends React.Component {

    render() {

        /* const renderedGrid = this.props.grid.map((row, rowIndex) => {
           return ( row.map((cell, colIndex) => {
                 if (colIndex === row.length-1)
                     return <br/>;
                 else
                     return <Cell key={rowIndex + "" + colIndex} background={"black"} size={{width: 50, height: 50}}/>
             },this));

         });*/
        return (
            <table className={'grid'}>
                <tbody>
                {this.props.grid.map((row, index) => <Row key={index} data={row} y={index} snake={this.props.snake}/>)}
                </tbody>
            </table>);
    }
}

export default Grid;
