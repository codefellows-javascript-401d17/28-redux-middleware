import React from 'react';
import {provider} from 'react-redux';
import{BrouserRouter} from  'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

const store = createAppStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState())
    });

    store.dispatch({ type: null });
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
