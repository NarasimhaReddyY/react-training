// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import App from './App.jsx';
import Textbox from './Textbox.jsx';
import Selectbox from './Selectbox.jsx';
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import UnorderList from './UnorderList.jsx';
import Repo from './Repo.jsx';
import RadioButtons from './RadioButtons.jsx';
import ParentRadioButton from './ParentRadioButton.jsx';
import RadioVsTextBox from "./RadioVsTextBox.jsx";

ReactDOM.render((<Router history={hashHistory}>
				    <Route path="/" component={App}/>
				    <Route path="/textbox" component={Textbox}/>
				    <Route path="/selectbox" component={Selectbox}/>
				    <Route path="/selected-text" component={Form}/>
				    <Route path="/counter-app" component={Counter}/>
				    <Route path="/unordered-list" component={UnorderList}/>
				    <Route path="/repo/:userName/:repoName" component={Repo}/>
				    <Route path="/radio-buttons" component={RadioButtons}/>
				    <Route path="/radio-select" component={ParentRadioButton}/>
				    <Route path="/radio-text" component={RadioVsTextBox}/>
				  </Router>
				), document.getElementById('react-root'));
