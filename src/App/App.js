import React, {Component} from 'react';
import styles from './App.scss';
import GameLayout from "./layout/game/GameLayout";
import Avatar from "./ui/avatar/Avatar";
import Outcome from "./ui/outcome/Outcome";
import image2 from '../images/avatars/beaver.png';
import image from '../images/avatars/dragon.png';
import image3 from '../images/outcomes/success.png';
import ControlPanel from "./layout/control-panel/ControlPanel";

import rock from '../images/choices/rock.png';
import paper from '../images/choices/paper.png';
import scissors from '../images/choices/scissors.png';
import lizard from '../images/choices/lizard.png';
import spock from '../images/choices/spock.png';
import Control from "./ui/control/Control";




class App extends Component {
  choices = [rock, paper, scissors, lizard, spock];

  render() {
    return (
      <div className={styles.app}>
          <GameLayout>
            <Avatar path={image}/>
            <Outcome path={image3}/>
            <Avatar path={image2}/>
          </GameLayout>
          <ControlPanel>
              {this.choices.map(choice => <Control path={choice}/>)}
          </ControlPanel>
      </div>
    );
  }
}

export default App;
