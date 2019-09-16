import React from 'react';
import styles from './styles.scss';

const GameLayout = (props) => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default GameLayout;