import React from 'react';
import Cell from '../Cell/Cell';

export default function Row({data,y,snake}) {
    return (
        <tr>
            {data.map((cell, index) => <Cell data={cell} x={index} y={y} key={index} snake={snake}/>)}
        </tr>
    )
}