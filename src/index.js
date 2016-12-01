import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import App from './App';
import exercisesOverviewPage from './exercises-overview/exercises-overview-page';
import createNewExercisePage from './exercises-overview/exercise-creation/create-new-exercise';
import Greeting from './home/greeting';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Greeting}/>
    <Route path="exercises-overview" component={exercisesOverviewPage}/>
    <Route path="ny-uppgift/:id/:editMode" component={createNewExercisePage}/>
</Route>
  </Router>
</Provider>, document.getElementById('root'));
