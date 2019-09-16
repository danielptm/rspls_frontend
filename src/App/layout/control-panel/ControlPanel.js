import React from 'react';
import styles from './styles.scss';

const ControlPanel = (props) => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default ControlPanel;