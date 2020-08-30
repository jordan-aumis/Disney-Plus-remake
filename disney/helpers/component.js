import React from 'react';

// There are in practice 3 methods to use to declare a components ->

// classic function declaration, es5 standard.
function MyComponent () {
    return (
        <p>My name is toto</p>
    );
}

// declaration function arrow store in a constant, standard es6.
const MyOtherComponent = () => {
    return (
        <p>My name is tata</p>
    );
}

// class declaration inheriting from React's Component class, es6 standard.
//+ (this syntax offering most possibilities in terms of data manipulation and state management)
class MySuperComponent extends React.Component {
    render() {
        return (
            <p>My name is totoro</p>
        );
    }
}

export {MyComponent, MyOtherComponent, MySuperComponent};
export default MySuperComponent;
