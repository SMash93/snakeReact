import React from 'react';
/**
 * Note − Notice that we are using key = {i} inside map() function.
 * This will help React to update only the necessary elements instead of
 * re-rendering the entire list when something changes. It is a huge performance boost for larger number of dynamically created elements.
 *
 */
class AppComponent extends React.Component {
    render() {

        return (
            <div>
                <HeaderComponent/>
                <Content/>
            </div>
        );
    }

}

class HeaderComponent extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.contentProp}</h2>
            </div>

        );
    }

}
HeaderComponent.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
};

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        id: 1,
                        name: 'Vlad',
                        age: 15
                    },
                    {
                        id: 2,
                        name: 'Gheorghe',
                        age: 15
                    },
                    {
                        id: 3,
                        name: 'Lobo',
                        age: 15
                    }
                ]
        }
    }

    render() {
        return (
            <div>
                <h2>
                    Component Content
                </h2>
                <table>
                    <tbody>
                    {
                        this.state.data.map((person, i) =>
                            <TableRow  key={i} data = {person}/>
                       )
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

class TableRow extends React.Component
{
    render() {
        return(<tr>
            <td>{this.props.data.age}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age} </td>
        </tr>);

    }
}

export default AppComponent;