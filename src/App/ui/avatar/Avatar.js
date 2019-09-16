import React from 'react';
import styles from './styles.scss';
import {Text} from '../../utils/Text';

const Avatar = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.path} />
            <div title={props.name} className={styles.name}>{Text.fitName(props.name)}</div>
        </div>
    )
};



export default Avatar;