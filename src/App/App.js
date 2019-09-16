import React, {Component} from 'react';
import styles from './App.scss';
import GameLayout from "./layout/game/GameLayout";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>

          <GameLayout>

          </GameLayout>
      </div>
    );
  }
}

export default App;
