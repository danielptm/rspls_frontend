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
          gameStatus: STATUS.PAUSED,
          humanScore: 0,
          computerScore: 0
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

  play = (choice) => {
      console.log("choice: " + choice);
      axios.post('http://localhost:8080/play', {"name": this.state.playerName, "choiceId":choice})
          .then((res) => {
              console.log(res);

              if (res.data.result == 'lose') {
                  this.setState({computerScore: this.state.computerScore + 1});
                  this.setState({gameStatus: STATUS.LOST});
              } else if (res.data.result == 'win') {
                  this.setState({humanScore: this.state.humanScore + 1});
                  this.setState({gameStatus: STATUS.WON});
              } else {
                  alert("TIE!");
              }
              setTimeout(() => {
                  this.setState({gameStatus: STATUS.PAUSED});
              }, 2000)
          })
  };

  showGameState = (status) => {
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
                score={this.state.humanScore}
                name={this.state.playerName}
                path={image}/>
            {this.showGameState(this.state.gameStatus)}
            <Avatar
                score={this.state.computerScore}
                name={'Computer'}
                path={bot}/>
          </GameLayout>
          <ControlPanel>
              {this.state.choices.map(choice =>
                  <Control
                      click={() => this.play(choice.id)}
                      key={choice.id} path={choice.path}/>)}
          </ControlPanel>
      </div>
    );
  }
}

export default App;
