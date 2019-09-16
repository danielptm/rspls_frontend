import React from 'react';
import styles from './styles.scss';

const Avatar = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.path} />
        </div>
    )
};



export default Avatar;