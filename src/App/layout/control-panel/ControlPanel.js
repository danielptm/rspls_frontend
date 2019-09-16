import React from 'react';
import styles from './styles.scss';

const ControlPanel = (props) => {
    return(
        <div className={styles.choicesContainer}>
            {props.children}
        </div>
    )
}

export default ControlPanel;