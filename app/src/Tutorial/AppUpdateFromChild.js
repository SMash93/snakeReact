import React from 'react';


class AppUpdateFromChild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
    }

    updateState = (e) => {
        this.setState({data: e.target.value})
    };

    render() {
        return (
            <div>
                <ContentUpdateFromChild myDataProp={this.state.data} updateStateProp={this.updateState}></ContentUpdateFromChild>
            </div>
        );
    }
}

class ContentUpdateFromChild extends React.Component {
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default AppUpdateFromChild;