import * as React from 'react';
import './App.css';
import '../styles/desk.scss';
import TopContainer from './topContainer/topContainer';
import MiddleContainer from 'src/components/middleContainer/middleContainer';
import { Provider } from 'react-redux';
import settingStore from 'src/redux/store';
import { IsDesk } from 'src/config/dashi.config';


class App extends React.Component {
  public render() {
    return (
      <div className={IsDesk ? "App deskContainer" : "App"}>
        <Provider store={settingStore}>
          <div>
            <TopContainer />
            <MiddleContainer />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
