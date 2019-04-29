import * as React from 'react';
import './App.css';
import TopContainer from './topContainer/topContainer';
import MiddleContainer from 'src/components/middleContainer/middleContainer';
import { Provider } from 'react-redux';
import settingStore from 'src/redux/store';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
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
