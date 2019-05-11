import React from 'react';

class ForceUpdateComponent extends React.Component{

    forceUpdateHandler = () => {
        this.forceUpdate()
    };
    render() {
        return(
          <div>
              <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
              <h4>Random number: {Math.random()}</h4>
          </div>
        );
    }
}

export default ForceUpdateComponent;