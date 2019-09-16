import React from 'react';
import styles from './styles.scss';

const Control = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.path} />
        </div>
    )
}

export default Control;