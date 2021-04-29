import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        // to fix i can just hardcode 'card expense-item' 
        // into the classname below and remove the const above
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
