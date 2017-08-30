import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardContainer from '../dashboard-container/'
import createAppStore from '../../lib/store.js';

const store = createAppStore();

class App extends React.Component {
  //app mounts, logs state from store
  componentDidMount() {
    store.subscribe(() => {
      console.log(':::STATE::::::', store.getState());
    })
  }


  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}
export default App;
