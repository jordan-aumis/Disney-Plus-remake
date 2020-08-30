import React from 'react';

const List = (props) => {
    return (
        <ul>
            {
                // The function map takes a function as a parameter (in this example it is a arrow function)
                // + It loops on all the element contained in the variable on which it is called
                props.items.map((item, i) => {
                    // Note that we pass a key attribute to our li
                    //+ this attribute is mandatory it is what allows react to identify each element to generate to allow updating of their contents (in the case where the data contained the variable on which we loop would be modified)
                    return <li key={i}>{item}</li>
                })
            }
        </ul>
    );
}
// let data = ['one', 'two', 'three'];
// <List items={data} /> retournera le html suivant :
// <ul>
//  <li>one</li><li>two</li><li>three</li>
// </ul>

export default List;
