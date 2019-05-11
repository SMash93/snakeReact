/**
 *
 * 1.
 *  React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.
    It is faster because it performs optimization while compiling code to JavaScript.
    It is also type-safe and most of the errors can be caught during compilation.
    It makes it easier and faster to write templates, if you are familiar with HTML.

   2.JavaScript expressions can be used inside of JSX.

   3. We can use our own custom attributes in addition to regular HTML properties and attributes.
    When we want to add custom attribute, we need to use data- prefix.
    In the following example, we added data-myattribute as an attribute of p element.

   4.




 */

import React from 'react';

class JSX extends React.Component {
    render() {
        var a = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return <div>
            <h1 style={myStyle}>Header</h1>
            <p data-myattribute="somevalue">Custom attribute using data-</p>
            <p>{1+1} Javascript Expressions</p>
            <h1>{a === 1 ? 'True!' : 'False'}</h1>
        </div>
    }
}

export default JSX;

