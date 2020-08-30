import React from 'react';

const MyApp = (props) => {
    // Here we load the appropriate nav thanks to our device props
    let nav = (props.device == "mobile") ? <nav className="mobile-nav"></nav> : <nav className="desktop-nav"></nav>;
    
    return (

        // We can dynamically define classes or a particular style using a prop to pass to our component
        <div style=`background-color: ${props.color}`>
            <header>
                // We display a different title if the user is connected
                <h1>{ (props.isLogged) ? 'Bienvenue !' : 'Veuillez vous connecter' }</h1>
            </header>
            // We include our nav variable, ps : not forgetting the braces
            {nav}
        </div>
    );
}

export default MyApp;
