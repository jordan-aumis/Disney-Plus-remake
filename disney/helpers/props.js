import React from 'react';


// We pass as a parameter of our function composing the props variable which will be defined by react
// + props is an object type variable, <FbCard like = '0' unlike = '99 '/> in this case -> props = {like:' 0 ', unlike:' 99 '};
const AlertBox = (props) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
}

class MyApp extends React.Component {
    render() {
        return (
            <article>
// The interest of the props is to make our component dynamic we can call our component several times with different values
                <AlertBox message="Hop" />
                <AlertBox message="HopHop" />
                <AlertBox message="HopHopHop" />
                <AlertBox message="HopHopHopHop" />
            </article>
        );
    }
}

export default MyApp;
