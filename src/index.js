import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import postIndex from './components/app';
import promise from 'redux-promise'
import reducers from './reducers';
import postsNew from './components/newpost'
import Show from './components/show'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
  <Switch>
  <Route exact path="/" component={postIndex}/>
  <Route exact path="/post/new" component={postsNew}/>


    <Route path="/post/:id" component={Show} />
</Switch>
  </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
