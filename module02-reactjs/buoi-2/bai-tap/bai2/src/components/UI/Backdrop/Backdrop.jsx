import { Component } from 'react';
import styles from './Backdrop.module.css';

class Backdrop extends Component {
  render() {
    console.log(styles);
    return <div className={styles['backdrop']}>asas</div>;
  }
}

export default Backdrop;
