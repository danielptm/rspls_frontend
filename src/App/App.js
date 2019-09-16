import React, {Component} from 'react';
import styles from './App.scss';
import GameLayout from "./layout/game/GameLayout";
import Avatar from "./ui/avatar/Avatar";
import Outcome from "./ui/outcome/Outcome";
import bot from '../images/avatars/bot.png';
import image from '../images/avatars/dragon.png';
import success from '../images/outcomes/success.png';
import fail from '../images/outcomes/fail.png';
import loading from '../images/loading.gif';
import ControlPanel from "./layout/control-panel/ControlPanel";

import axios from 'axios';

import rock from '../images/choices/rock.png';
import paper from '../images/choices/paper.png';
import scissors from '../images/choices/scissors.png';
import lizard from '../images/choices/lizard.png';
import spock from '../images/choices/spock.png';
import Control from "./ui/control/Control";

import * as STATUS from './status/Status'



class App extends Component {


  constructor(props) {
      super(props);
      this.state = {
          choices: [],
          playerName: '',
          gameStatus: STATUS.PAUSED
      }
  }

  componentDidMount() {
      this.getChoices();
      this.getRandomPlayerName();
  }

  getChoices = () => {
      axios.get('http://localhost:8080/choices')
          .then((res) => {
              res.data.forEach(choice => {
                switch(choice.id) {
                    case 1:
                        choice.path = rock;
                        break;
                    case 2:
                        choice.path = paper;
                        break;
                    case 3:
                        choice.path = scissors;
                        break;
                    case 4:
                        choice.path = lizard;
                        break;
                    case 5:
                        choice.path = spock;
                        break;
                }
              });
              this.setState({choices: res.data})
          })
  };

  getRandomPlayerName = () => {
      axios.get('http://localhost:8080/player/random-name')
          .then((res) => {
              this.setState({playerName: res.data.name})
          })
  };

  showGameState = (status) => {
      console.log('hey');
      let result = null;
      switch(status) {
          case STATUS.PAUSED:
              result = <Outcome path={loading}/>;
              break;
          case STATUS.WON:
              result = <Outcome path={success}/>;
              break;
          case STATUS.LOST:
              result =  <Outcome path={fail}/>;
              break;
          default:
              result = <Outcome path={loading}/>;
              break;

      }
      return result;
  };

  render() {
    return (
      <div className={styles.app}>
          <GameLayout>
            <Avatar
                name={this.state.playerName}
                path={image}/>
            {this.showGameState(this.state.gameStatus)}
            <Avatar
                name={'Computer'}
                path={bot}/>
          </GameLayout>
          <ControlPanel>
              {this.state.choices.map(choice => <Control key={choice.name} path={choice.path}/>)}
          </ControlPanel>
      </div>
    );
  }
}

export default App;
